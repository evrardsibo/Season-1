// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    

    let e = localStorage.getItem('valueStore')

    document.getElementById("target").innerHTML = e

    document.getElementById("increment").addEventListener("click", () => {

        e++;

        document.getElementById("target").innerHTML = e;

        console.log(e)
        
        localStorage.setItem('valueStore', JSON.stringify(e))
    })

})();
