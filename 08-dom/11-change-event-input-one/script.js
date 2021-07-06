// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here

    document.querySelector('#pass-one').setAttribute("maxlength", "10");
        let e = document.querySelector('#pass-one');
        let v = document.querySelector('#counter');
             e.addEventListener('input', () =>{
        
        v.innerHTML = e.value.length + "/10";
    })

    


})();
