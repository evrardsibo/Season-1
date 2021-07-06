// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.querySelector('#run').addEventListener('click', () => {
     let one = document.querySelector('#pass-one').value;
     let two = document.querySelector('#pass-two').value;
     if(one === two){
        document.querySelector("#pass-one").style.borderColor = "green";
        document.querySelector("#pass-two").style.borderColor = "green";

     }else{

        document.querySelector("#pass-one").style.borderColor = "red";
        document.querySelector("#pass-two").style.borderColor = "red";
     }
    })

    

})();
