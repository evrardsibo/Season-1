// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here

    let e = document.querySelector("#target").innerHTML;
    var i = 0;
    
    document.querySelector("#target").innerHTML="";

    function typeWriter () {
        if (i < e.length) {
            document.querySelector("#target").innerHTML += e.charAt(i);
            i++;
            setTimeout(typeWriter, (80));
        }
    }

    typeWriter();

})();
