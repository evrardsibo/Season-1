// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    
    let y = Math.floor(Math.random() * 100);
      
    let guess = 0;
      
    document.querySelector("#submitguess").addEventListener('click',() =>{
    
  let x = document.querySelector("#guessField").value;
  
   if(x == y)
   {    
       alert("YOU GUESSED IT RIGHT IN "
               + guess + " GUESS ");
   }
   else if(x > y)
   {    
       guess++;
       alert("TRY A SMALLER NUMBER");
   }
   else
   {
       guess++;
       alert("TRY A GREATER NUMBER")
   }
})



})();
