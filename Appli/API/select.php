<!DOCTYPE html>
<html lang="FR-fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen ForEach Academy : selection <?= $_GET['httpcode'] ?></title>
    <link rel="stylesheet" href="../style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Serif&display=swap" rel="stylesheet">

</head>

<body>

    <?php


    require_once "./SentenceController/sentenceController.php";
    // On transforme notre paramètre en string pour le soumettre au test
    $httpcode = intval($_GET['httpcode']);

    // On recherche tous les HTTP-code
    $sentenceController = new sentenceController();
    $sentences = $sentenceController->getAll();

    // On mémorise le plus grand existant
    foreach ($sentences as $value) {
        $maxHttpCode = $value['http_code'];
    }


    // On vérifie si la requete est correcte et complete
    if (
        $_SERVER['REQUEST_METHOD'] == 'GET' &&
        $_GET["key"] == 'ForeachAcademyKey' &&
        isset($httpcode)
    ) {

        // Si le HttpCode passé en Get est trop petit ou trop grand, on redirige vers une erreur404
        if ($httpcode < 699 || $httpcode > $maxHttpCode) {
            header("Location: .error404.php");
            die();
        } else {
            //Si non, on récupère notre message pour l'afficher
            $sentence = $sentenceController->get($httpcode);
        }
    } else {
        header("Location: .error404.php");
        die();
    }

    ?>

    <div class="container">
        <div id="result">
            <span class="httpCode"> <?= $sentence['http_code'] ?></span>
            <span class="tag"><?= $sentence['tag'] ?></span>
            <span class="message"><?= $sentence['message'] ?></span>
        </div>
    </div>

</body>

</html>