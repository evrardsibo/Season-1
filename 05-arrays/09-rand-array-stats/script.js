// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array



    // your code here
    // document.getElementById('run').addEventListener('click' , () =>{
    //     document.getElementById("min").value;
    //     document.getElementById("max").value;
    //     document.getElementById("sum").value;
    //     document.getElementById("average").value;

    // })
    var numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

    document.getElementById("run").addEventListener("click", () => {

        numbers.forEach((number, index) => {
            nodeItem = document.getElementById("n-" + (index+1));
            nodeItem.innerHTML=number;
        });

        document.getElementById("min").innerHTML=Math.min(...numbers);
        document.getElementById("max").innerHTML=Math.max(...numbers);

        var arrSum = arr => arr.reduce((a,b) => a + b, 0)


        document.getElementById("sum").innerHTML=arrSum(numbers);
        document.getElementById("average").innerHTML=arrSum(numbers)/10;

    })

