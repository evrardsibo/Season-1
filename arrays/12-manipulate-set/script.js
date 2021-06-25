// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        var a = ["banana", "kiwi"];
        var d = ["apple","cherry"];
        fruits.add(a);
        fruits.delete(d);
        console.log([fruits]);
    })
})();
