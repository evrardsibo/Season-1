// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {


    let e = document.getElementById('source'); // source
    let v = e.getAttribute('data-image');    // change value
    let r = document.createElement('img');   // create tags
    r.setAttribute('src',v);
    e.appendChild(r);
    e.outerHTML = e.innerHTML;   // remove

    

    
    // your code here

})();
