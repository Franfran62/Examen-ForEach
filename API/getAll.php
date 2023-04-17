
<?php 

// header requis 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// On vérifie que la méthode utilisée est correcte 
if ($_SERVER['REQUEST_METHOD'] == 'GET') 
{
    
    // On inclut les fichiers d'accès aux données 
        require_once('./SentenceController/sentenceController.php');
    
    // On instancie les salles
        $sentenceController = new sentenceController();

    // On récupère les données 
        $sentences =  $sentenceController->getAll();

    // On gère ce qu'on récupère
        $response = json_encode($sentences);
        echo $response;

    } 
    else 
    {
    // Si non, on gère l'erreur 
        http_response_code(405);
        echo json_encode(["ErrorMessage" => "La méthode utilisée n'est pas la bonne"]);
     }

?>
