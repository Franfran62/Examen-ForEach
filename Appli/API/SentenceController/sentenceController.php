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

    // On créé un objet dans la table renvoyé sous forme de booléen
        public function create(int $httpcode, string $tag, string $message) : bool 
        {
            // On vérifie l'entrée 
                if (is_string($message))
                {
                // On sécurise l'entrée 
                    $message = htmlspecialchars(strip_tags($message));

                // On créé l'objet
                    $req = $this->pdo->prepare("INSERT INTO `sentence` (http_code, tag, message) VALUES (:httpcode, :tag, :message)");
                    $req->bindValue(':httpcode', $httpcode, PDO::PARAM_INT);
                    $req->bindValue(':tag', $tag, PDO::PARAM_STR);
                    $req->bindValue(':message', $message, PDO::PARAM_STR);
                    
                // On return la réponse
                    if ($req->execute())
                    {
                        return true;
                    } 
                    else 
                    {
                        return false;
                    }
                }
        }
    
    // On appel un seul objet dans la table
    public function get(int $httpcode)
    {
        $req = $this->pdo->prepare("SELECT * FROM `sentence` WHERE http_code = :httpcode");
        $req->bindParam(":httpcode", $httpcode, PDO::PARAM_INT);
        $req->execute();
        while ($row = $req->fetch(PDO::FETCH_ASSOC)) 
        {
            extract($row);
            $sentence = [
                'http_code' => $http_code,
                'tag' => $tag,
                'message' => $message
            ];
        }
        
        return $sentence;
    }

}

