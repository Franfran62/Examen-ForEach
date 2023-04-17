const urlApi = 'http://localhost:8888/Test%20ForEach/Code/API/getAll.php';
const Btn = document.getElementById('btn');
const ExcuseDiv = document.getElementById('excuse-div');

Btn.addEventListener('click', () => {
    console.log('Hello World');
    ApiCall();
})


async function ApiCall()
{
    try {
        const response = await fetch(urlApi);
        
        console.log(response.json());

    } catch (error) {

        throw new Error(`${response.status}`);
    }
}