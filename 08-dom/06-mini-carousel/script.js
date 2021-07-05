// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
   
   document.getElementById('next').addEventListener('click' , () =>{
    let im = document.querySelector('img');
    for(let i = 0 ; i < gallery.length ; i++){

        
        im.src=gallery[i]
    }
   })

    

})();
// let i = 1
// let im = document.querySelector('img')
// document.getElementById('next').addEventListener('click' , () =>{
//    if(i == gallery.length){
//        i = 0
//    }
//        im.src = gallery[i]
//        i++
  
   
   

// })

