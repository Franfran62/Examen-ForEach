const API = window.urlApiSelect+"?key=ForeachAcademyKey"+"&httpcode="+$_GET('httpcode');
const result = document.getElementById('result');

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
        const fetchPromise = fetch(API, init);

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

        window.location = window.url404;

    }

function createHTML(sentence) {
    
    result.innerHTML += 
    `
        <span class="httpCode"> ${sentence.http_code} </span> 
        <span class="tag"> ${sentence.tag} </span> 
        <span class="message"> ${sentence.message} </span> 
    `;
}
}