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
                findHigherAndLower(dataReceived)
            })


    } catch (error) {

        // window.location = window.url404;
        console.log(error);

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
function findHigherAndLower(dataReceived) {
    let lowerHttpCode = dataReceived[0].http_code;
    let higherHttpCode = dataReceived[0].http_code;

    // On trouve le code Http le plus haut et le plus bas dans les data reçues
    dataReceived.forEach(element => {
        if (element.http_code > higherHttpCode) {
            higherHttpCode = element.http_code;
        } else if (element.http_code < lowerHttpCode) {
            lowerHttpCode = element.http_code;
        }
    })
    defineRamdomSentence(lowerHttpCode, higherHttpCode, dataReceived);
    
}

function defineRamdomSentence(lowerHttpCode, higherHttpCode, dataReceived) {
    
    let randomHttpCode;
    let randomSentence;
    
    // On selectionne une phrase aux hasard parmi les existantes
    randomHttpCode = getRandomBetweenMinAndMax(lowerHttpCode, higherHttpCode);
    randomSentence = dataReceived.find(sentence => sentence.http_code == randomHttpCode);

    // On vérifie si on en a bien attrapé une ou on hook jusqu'à ce que
    if (randomSentence) {
        checkSentence(randomSentence, dataReceived);
    } else {
        defineRamdomSentence(lowerHttpCode, higherHttpCode, dataReceived);
    }

    // On envoie à vérification 
}

// On vérifie si la phrase selectionnée est différente de l'ancienne
// Si oui, on l'affiche
// Si non, on hook pour générer une nouvelle phrase
function checkSentence(randomSentence, dataReceived) {

    if (excuseDiv.textContent !== randomSentence.message) {
        setTimeout(() => {
            unsetLoader();
            excuseDiv.textContent = randomSentence.message;

        }, getRandomBetweenMinAndMax(1000, 5000));
    } else {
        defineRamdomSentence(lowerHttpCode, higherHttpCode, dataReceived);
    }
}

