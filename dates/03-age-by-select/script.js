(() => {

    // your code here
    var evr= document.getElementById('run')
    evr.addEventListener('click',function(){
     var day = document.getElementById("dob-day").value;
     var mon = document.getElementById("dob-month").value;
     var yea = document.getElementById("dob-year").value;
     
     var tod = new Date();

     var age = tod.getFullYear() - yea;
    if (tod.getMonth() < mon || (tod.getMonth() == mon && tod.getDate() < day)) {
    age--;
    
    }

          alert(age);

        });
})();