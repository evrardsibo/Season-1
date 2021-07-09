// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.querySelector('#run').addEventListener('click', () =>{

        let id = new Number(document.querySelector("#hero-id").value)

        fetch('http://localhost:3000/heroes' + '/'+ id, {
         method: 'DELETE',
        headers: {
         "Content-type": "application/json; charset=UTF-8"
}
})
        .then(response => response.json())
        .then(json => console.log(json));


    })
    // N3$Qy,2K+$.28d!
})();
