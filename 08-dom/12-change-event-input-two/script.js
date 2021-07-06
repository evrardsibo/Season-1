// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let e = document.querySelector("#validity");
    let v = document.querySelector("#pass-one");
    v.addEventListener("input", () => {
        let s = document.querySelector("#pass-one").value;
        let k = s.length;
        let i = s.replace(/\D/g, '').length;
        if ((k >= 8) && (i >= 2)) {
            e.innerHTML = "Ok";
        }
        else {
            e.innerHTML = "Not ok";
        }
    });

})();
