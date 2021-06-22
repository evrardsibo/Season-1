// 02-maths/03-even-square/script.js - 2.3: squares and pairs

// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var tab = [];
            var a =1;
        while (a<=21) {
            tab.push(Math.sqrt(a));
            a++;
        }
        alert(tab);
    

    });

})();

