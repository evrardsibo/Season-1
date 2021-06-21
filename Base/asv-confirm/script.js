// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');
  
    // YOUR CODE HERE
  })();

// message propmt
var user = prompt('Your Name ?')
var age = prompt('Your Age ?')
var gender = prompt('Your Gender ?')
var town = prompt('You Live Where ?')

if ( confirm ('Confirm')){
    alert ('Name:'+ ' '+user + ' ' + age + ' ' + gender + ' ' + town)
} else {
    alert ()
}

