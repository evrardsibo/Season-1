
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    var evr = document.getElementById("color").value;
    console.log(evr);

    var van = document.getElementById("run");
    van.addEventListener("click",function(){
        var evr = document.getElementById("color").value;
        document.body.style.backgroundColor = evr;});
})();
