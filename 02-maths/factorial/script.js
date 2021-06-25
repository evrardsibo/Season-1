// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        
        var rep = document.getElementById("number").value;
        var evr= 1;

        while (rep > 1) { 
            evr *= rep;
            rep--; 
          };

          alert(evr)
    });

})();
