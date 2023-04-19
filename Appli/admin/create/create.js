
const form = document.querySelector(".create-form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    addSentence();
}

const inputs = [];

function addSentence() {

    let formObj = new FormData(form);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify ({
        'tag': formObj.get('tag'),
        'message': formObj.get('message')
    })

    const init = {
        method: 'POST',
        headers : headers,
        body: body
    };

    fetch(window.urlApiCreate, init)
        .then (response => {
            if (response.status == 201) 
            {
                alert('Votre excuse à bien été ajouté');
            } else {
                alert('Il y a eu une erreur, veuillez recommencer s\'il vous plait');
            }
        })
}

