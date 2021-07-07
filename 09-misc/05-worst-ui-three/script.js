// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let e = setInterval(() => {
        
        document.querySelector("#part-one").value = Number(document.querySelector("#part-one").value) + 1
        if (document.querySelector("#part-one").value > 499) {
            document.querySelector("#part-one").value = 460
        }
        
    }, 100);
    document.querySelector("#fix-part-one").addEventListener("click", () => {
        
        clearInterval(e);
        document.querySelector("#target").innerHTML = "0" + Number(document.querySelector("#part-one").value + "000000")
        
    })

    let e1 = setInterval(() => {
        
        document.querySelector("#part-two").value = Number(document.querySelector("#part-two").value) + 1
        if (document.querySelector("#part-two").value > 99) {
            document.querySelector("#part-two").value = 00
        }
        
    }, 100);
    document.querySelector("#fix-part-two").addEventListener("click", () => {
        
        clearInterval(e1);
        document.querySelector("#target").innerHTML = "0" + Number(document.querySelector("#part-two").value + "000000")
        
    })
    let e2 = setInterval(() => {
        
        document.querySelector("#part-three").value = Number(document.querySelector("#part-three").value) + 1
        if (document.querySelector("#part-three").value > 99) {
            document.querySelector("#part-three").value = 00
        }
        
    }, 100);
    document.querySelector("#fix-part-three").addEventListener("click", () => {
        
        clearInterval(e2);
        document.querySelector("#target").innerHTML = "0" + Number(document.querySelector("#part-three").value + "000000")
        
    })
    let e3 = setInterval(() => {
        
        document.querySelector("#part-four").value = Number(document.querySelector("#part-four").value) + 1
        if (document.querySelector("#part-four").value > 99) {
            document.querySelector("#part-four").value = 00
        }
        
    }, 100);
    document.querySelector("#fix-part-four").addEventListener("click", () => {
        
        clearInterval(e3);
        document.querySelector("#target").innerHTML = "0" + Number(document.querySelector("#part-four").value + "000000")
        
    })


})();
