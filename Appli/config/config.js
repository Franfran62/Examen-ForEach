const online = "local";

window.urlHome = "http://localhost:8888/examen-foreach/Appli/";
window.url404 = "http://localhost:8888/examen-foreach/Appli/view/erreur404.html";

if (online === 'local') {


    window.urlApiCreate = 'http://localhost:8888/examen-foreach/Appli/API/create.php';
    window.urlApiGet = 'http://localhost:8888/examen-foreach/Appli/API/getAll.php';
    window.urlApiSelect ='http://localhost:8888/examen-foreach/Appli/API/select.php';

} else if (online === 'online') {

    window.urlApiCreate = 'https://www.examen-foreach.francoiskukla.fr/API/create.php';
    window.urlApiGet = 'https://www.examen-foreach.francoiskukla.fr/API/getAll.php';
    window.urlApiSelect ='https://www.examen-foreach.francoiskukla.fr/API/select.php';
 
}

