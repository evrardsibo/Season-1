// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here
    document.querySelector('#run').addEventListener('click',() => {
        let id = new Number (document.querySelector('#hero-id').value)
        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(responses => responses.forEach((element) => {
           let template = document.querySelector('#tpl-hero')
           let target =  document.querySelector('#target')
           let clone =  document.importNode(template.content, true)
           let li = clone.querySelector('li')
           let title = li.querySelector('h4')
           let name = title.querySelector('strong')
           let alte = title.querySelector('em')
           let po = li.querySelector('p')
           let call = element.id
           name.innerHTML = element.name
           alte.innerHTML = element.alte
           for(let i = 0 ; i<element.abilities.length ; i++){
               po.innerHTML += element.abilities[i] + '<br/>'

           }if(id == call){
           target.appendChild(clone)
        }
        }))
    })
})();
