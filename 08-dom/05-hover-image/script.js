// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let e = document.querySelector("img");
    e.addEventListener ('mouseover' , function(){
        e.src = '../../_shared/img/kiss-wink-heart.svg'
    })

    e.addEventListener('mouseout', function(){
        e.src = "../../_shared/img/kiss.svg"
      })

})();


