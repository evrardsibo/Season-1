// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    document.querySelector("#slider").addEventListener("click", () => {
        
        document.querySelector("#target").innerHTML = 0 + document.querySelector("#slider").value
    })

})();
