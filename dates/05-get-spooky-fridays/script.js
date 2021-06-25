
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    var evr = document.getElementById('run');
    evr.addEventListener('click',function(){
        let yea = document.getElementById('year').value;
        const options = {month: 'long'};
        let mon = [];
        for(let i = 1; i <= 12; i++){
           const d = new Date(i + "/13/" + yea);
            if(d.getDay() == 5){
                dString = d.toLocaleDateString('en-GB',options);
                mon.push(dString);
            }
        }
        
        alert(`In ${yea}, there was a Friday 13th in ${mon}`);
        
        
    })
  
  })();

