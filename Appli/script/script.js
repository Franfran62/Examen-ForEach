const API = window.urlApiGet + "?key=ForeachAcademyKey";

const btn = document.getElementById('btn');
const excuseDiv = document.getElementById('excuse-div');
const loader = document.getElementById('loader');



// On écoute le Btn afin de lancer le call API
btn.addEventListener('click', () => {
    setLoader();
    callApi();
})

function setLoader() {
    excuseDiv.style.display = "none";
    loader.style.display = "flex";

}

function unsetLoader() {
    excuseDiv.style.display = "block";
    loader.style.display = "none";
}

// On appelle L'API et retourne un tableau contenant l'ensemble des data
async function callApi() {

    // On initialise notre requete et notre format de reception
    const headers = new Headers();
    headers.append('Content-Type', "application/json");

    const init = {
        method: 'GET',
        headers: headers
    };
    // On cherche à recevoir un tableau de data
    const dataReceived = [];

    try {
        const fetchPromise = fetch(API, init);

        await fetchPromise
            .then(response => {
                return response.json();
            })
            .then(response => {
                response.forEach(element => {
                    dataReceived.push(element);
                })
                defineOneSentence(dataReceived)
            })


    } catch (error) {

        // window.location = window.url404;
        console.log(API);

    }

    // On envoie nos données reçu dans un sous-composant qui va selectionner une seule phrase
}

// On renvoie un nombre aléatoire entre une valeur min (incluse) et une valeur max (incluse)
function getRandomBetweenMinAndMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// On Selectionne une phrase parmi toutes
function defineOneSentence(dataReceived) {
    const lowerHttpCode = dataReceived[0].http_code;
    let higherHttpCode;
    let randomHttpCode;
    let randomSentence;

    // On trouve le code Http le plus haut dans les data reçues
    dataReceived.forEach(sentence => {
        higherHttpCode = sentence.http_code;
    })

    // On selectionne une phrase aux hasard parmi les existantes
    randomHttpCode = getRandomBetweenMinAndMax(lowerHttpCode, higherHttpCode);
    randomSentence = dataReceived.find(sentence => sentence.http_code === randomHttpCode.toString());
    
    // On envoie à vérification 
    checkSentence(randomSentence);
}

// On vérifie si la phrase selectionnée est différente de l'ancienne
// Si oui, on l'affiche
// Si non, on hook pour générer une nouvelle phrase
function checkSentence(randomSentence) {

    if (randomSentence) {
        if (excuseDiv.textContent !== randomSentence.message) {
            setTimeout(() => {
                unsetLoader();
                excuseDiv.textContent = randomSentence.message;

            }, getRandomBetweenMinAndMax(1000, 5000));
        } else {
            callApi();
        }
    } else {
        callApi();
    }
}

