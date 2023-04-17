<?php 

class database {

    private PDO $pdo;

    private $dbname = "TestForEach";
    private $host = "localhost";
    private $username = "root";
    private $password = "root";


    // On se connecte à la BDD à la création

        public function getConnection()
        {

            try 
            {
                $this->pdo = new PDO("mysql:dbname=$this->dbname;host=$this->host", $this->username, $this->password);
                $this->pdo->exec("set names utf8");
                
                return $this->pdo;

            } catch (PDOException $error) 
            {
                $errorMessage = $error->getMessage();

                return $errorMessage;
            } 

    }
}