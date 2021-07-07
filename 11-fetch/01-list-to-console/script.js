// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here
    document.querySelector('#run').addEventListener('click', () => {
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log("Erreur : " + error));
    })
})();
