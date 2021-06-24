
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var chang = new Date().getHours() >= 18 ? 'Good Evening' : 'Hello';
    document.getElementById('target').innerHTML = chang
    

   
    
})();
