<!DOCTYPE html>
<html lang="FR-fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen ForEach Academy : selection <?= $_GET['httpcode'] ?></title>
    <link rel="stylesheet" href="./style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Serif&display=swap" rel="stylesheet">

</head>

<body>

    <?php


    require_once "./SentenceController/sentenceController.php";
    $sentenceController = new sentenceController();


    // On transforme notre paramètre en string pour le soumettre au test
    $httpcode = intval($_GET['httpcode']);

    // On vérifie si la requete est correcte et complete
    if (
        $_SERVER['REQUEST_METHOD'] == 'GET' &&
        $_GET["key"] == 'ForeachAcademyKey' &&
        isset($httpcode)
    ) {
        //Si non, on récupère notre message pour l'afficher
        $sentence = $sentenceController->get($httpcode);
        if ($sentence === false) {
            header("Location: erreur404");
            die();
        } else {
    ?>
</body>

<div class="container">
    <div id="result">
        <h2>
            <span class="httpCode"> <?= $sentence['http_code'] ?></span> - 
            <span class="tag"><?= $sentence['tag'] ?></span> - 
            <span class="message"><?= $sentence['message'] ?></span>
        </h2>
    </div>
</div>

<?php }
    } ?>

</html>