// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let e = document.getElementsByClassName("target")
      
     for(let i = 0 ; i <e.length ; i++){

        e[i].innerHTML = "owned"
     }
    

   

})();
