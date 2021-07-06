// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let e = document.getElementById('target');
    let tab = document.createElement('table');
    // tab.setAttribute('id' , 'tabl');
    e.appendChild(tab);
    for (let a = 0; a < 10; a++) {
        let row = tab.insertRow(a);
        for (let b = 0; b < 10; b++) {
            row.insertCell(b).innerText = (b+1) * (a+1);
        }
    }
   
   

    

    
            

        

    
              


})();
