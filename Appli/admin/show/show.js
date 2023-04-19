const urlApi = 'http://localhost:8888/Test%20ForEach/Code/API/getAll.php?key=ForeachAcademyKey';
const url404 = "http://localhost:8888/Test%20ForEach/Code/Appli/erreur404.html";
const list = document.getElementById('liste');

callApi();

async function callApi() {
    // On initialise notre requete et notre format de reception
    const headers = new Headers();
    headers.append('Content-Type', "application/json");

    const init = {
        method: 'GET',
        headers: headers
    };

    try {
        const fetchPromise = fetch(urlApi, init);

        // On gère la requete en asynchrone
        await fetchPromise
            .then(response => {
                return response.json();
            })
            .then(response => {
                response.forEach(element => {
                   createHTML(element);
                })
            })

    } catch (error) {

        window.location = error404;

    }

function createHTML(sentence) {
    
    list.innerHTML += 
    `<li>
        <span class="httpCode"> ${sentence.http_code} </span> 
        <span class="tag"> ${sentence.tag} </span> 
        <span class="message"> ${sentence.message} </span> 
    </li>`;
}
}
