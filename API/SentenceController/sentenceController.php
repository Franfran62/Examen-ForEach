<?php 

require_once('./config/database.php');
   
class sentenceController {

    private PDO $pdo;

    // On gère la connection à la BDD lors de la construction de l'objet
        public function __construct() 
        {
            $connection = new database();
            $this->pdo = $connection->getConnection();
        }


    // On appel tous les objets dans la table renvoyés sous forme de tableau associatif
        public function getAll() : array
        {
            $req =  $this->pdo->prepare( "SELECT * FROM sentence");
            $req->execute();

            while ($row = $req->fetch(PDO::FETCH_ASSOC)) 
            {
                extract($row);

                $sentence = [
                    'http_code' => $http_code,
                    'tag' => $tag,
                    'message' => $message
                ];

                $sentences[] = $sentence;        
            }
            
            return $sentences;
        }
}

