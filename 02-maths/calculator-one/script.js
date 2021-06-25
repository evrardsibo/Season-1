// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {

        // perform an addition
        var o1 = Number(document.getElementById("op-one").value);
        var o2 = Number(document.getElementById("op-two").value);
        var add = o1 + o2
        alert (add)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var o1 = Number(document.getElementById("op-one").value);
        var o2 = Number(document.getElementById("op-two").value);
        var sub = o1 - o2;
        alert(sub);
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
            var o1 = Number(document.getElementById("op-one").value);
            var o2 = Number(document.getElementById("op-two").value);
            var mult = o1 * o2;
            alert(mult);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var o1 = Number(document.getElementById("op-one").value);
            var o2 = Number(document.getElementById("op-two").value);
            var div = o1 / o2;
            alert(div);
    });
})();

    
    
