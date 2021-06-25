// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
   for(var i = 1 ; i < 101 ; i++){

    if(i % 3 == 0 && i % 5 ==0){

        alert('fizzbuz' + i)
    }else if(i % 3 ==0){
        alert('fizz' + i)
    }
    else if(i % 5 ==0){

        alert('buz'+ i)
    }else{

        alert(i)
    }
}

})();

