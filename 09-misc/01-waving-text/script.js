// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let e = document.querySelector('#target').textContent.split('');
    let siz = ['20px','30px','40px','50px','25px','35px','45px'];

    e = e.map(function(char){
        return `<span style="font-size:${siz[Math.floor(Math.random() * siz.length)]}">`+char+'</span>';
    })
    document.querySelector('#target').innerHTML = e.join('');
    
})();
