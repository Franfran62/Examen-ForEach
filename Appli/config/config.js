const online = "local";

if (online === 'local') {

    window.urlHome = "http://localhost:8888/Test%20ForEach/Code/Appli/";
    window.url404 = "http://localhost:8888/Test%20ForEach/Code/Appli/erreur404.html";

    window.urlApiCreate = 'http://localhost:8888/Test%20ForEach/Code/Appli/API/create.php';
    window.urlApiGet = 'http://localhost:8888/Test%20ForEach/Code/Appli/API/getAll.php';

} else if (online === 'online') {

    window.urlHome = "http://www.examen-foreach.francoiskukla.fr/";
    window.url404 = "http://www.examen-foreach.francoiskukla.fr/erreur404.html";

    window.urlApiCreate = 'http://www.examen-foreach.francoiskukla.fr/API/create.php';
    window.urlApiGet = 'http://www.examen-foreach.francoiskukla.fr/API/getAll.php';
}
