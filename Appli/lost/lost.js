const count = document.getElementById('count');

let i = 5;

count.textContent = `${i}`;

setInterval(redirection, 1000);

function redirection(params) {
    if (i > 0)
    {
        count.textContent = `${i}`;
        i -= 1;

    } else {
        window.location = window.urlHome;    
    }
}
