
<?php 

// On vérifie que la méthode utilisée est correcte 
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $_SERVER["QUERY_STRING"] == 'key=ForeachAcademyKey') 
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
        echo json_encode(["ErrorMessage" => "Oups, Il n'y a rien ici"]);
     }

?>
