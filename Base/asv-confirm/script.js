
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');
  
    // YOUR CODE HERE
  })();

// message asv-confirm
function evrard (){
var user = prompt('Your Name ?')
var age = prompt('Your Age ?')
var gender = prompt('Your Gender ?')
var town = prompt('You Live Where ?')
var conf = prompt(`Your Name is : ${user} ,You are ${age} years old, you are a ${gender} and you live in ${town}.Is this correct ? Y / N`);

// resultat
console.log(confirm)

// conditions

if(conf=='Y'){
    alert ('Welcome')
}else if(conf!=='Y'){
    evrard()
}else{
    
}
    


}
evrard()

