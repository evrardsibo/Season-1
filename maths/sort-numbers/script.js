// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var evr = document.getElementById("numbers").value;
var one = evr.split(", ");
var two=[];

for (let i = 0; i < one.length; i++) {
    two.push(Number(one[i]))
};
two.sort(function(a, b){
    return a - b;
});
alert(two);
          

    });

})();