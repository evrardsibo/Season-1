

(() => {
    // your code here
    document.querySelector('#run').addEventListener('click',() => {
        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(responses => responses.forEach((item) => {
           let template = document.querySelector('#tpl-hero')
           let target =  document.querySelector('#target')
           let clone =  document.importNode(template.content, true)
           let li = clone.querySelector('li')
           let title = li.querySelector('h4')
           let name = title.querySelector('strong')
           let alte = title.querySelector('em')
           let po = li.querySelector('p')
           name.innerHTML = item.name
           for(let i = 0 ; i<item.abilities.length ; i++){
               po.innerHTML += item.abilities[i] + '<br/>'

           }
           target.appendChild(clone)
        }))
    })

})();
