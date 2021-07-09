// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    class Evr {
        constructor(id , alterEgo , abilities , name){
            this.id = id
            this.alterEgo = alterEgo
            this.abilities = abilities
            this.name = name
        }
    }

    document.querySelector('#run').addEventListener('click' , () => {

        let id;
        let nam = document.querySelector("#hero-name").value
       let alt = document.querySelector("#hero-alter-ego").value
        let pow = document.querySelector("#hero-powers").value
        let arp = pow.split(",")

        let van = new Evr(id , nam , alt , arp)
        
        fetch('http://localhost:3000/heroes' , {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(van)
        })
        
    })
              
})();
