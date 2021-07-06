// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.querySelector('#run').addEventListener('click' , () => {

        let one = document.querySelector('#pass-one').value;
        let two = document.querySelector('#pass-two').value;
        if(one === two){
            document.querySelector('#pass-one').style.borderColor = 'green';
            document.querySelector('#pass-two').style.borderColor = 'green';
        }else{
            document.querySelector('#pass-one').setAttribute('class' , 'error');
            document.querySelector('#pass-two').setAttribute('class' , 'error');

            
        }
    })

})();
