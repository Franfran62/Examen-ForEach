<?php

// header requis 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// On vérifie que la méthode utilisée est correcte 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // On inclut les fichiers d'accès aux données 
    include_once('./SentenceController/sentenceController.php');

    // On instancie le controller
    $sentenceController = new sentenceController();

    // On récupère les data de la requte
    $question = json_decode(file_get_contents("php://input"));

    // On vérifie que les données ne sont pas vides
    if (!empty($question) && !empty($question->httpcode) && !empty($question->tag) && !empty($question->message)) {
        // On créé l'objet 
        $data = $sentenceController->create($question->httpcode, $question->tag, $question->message);

        // On renvoie le statut de la création 
        if ($data == true) {
            http_response_code(201);
            echo json_encode(["SuccessMessage" => "L'objet a bien été créé"]);
        } else {
            http_response_code(503);
            echo json_encode(["ErrorMessage" => "Une erreur est survenue, l'objet n'a pas pu être créé"]);
        }
    } else {
        // Si non, on gère l'erreur 
        http_response_code(405);
        echo json_encode(["ErrorMessage" => "Vous ne transmettrez pas de données"]);
    }
} else {
    // Si non, on gère l'erreur 
    http_response_code(404);
    echo json_encode(["ErrorMessage" => "La méthode utilisée n'est pas autorisée"]);
}
