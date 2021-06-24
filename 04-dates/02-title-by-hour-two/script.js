
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

var chang = new Date().getHours () >= 17 ? 'Good Evening' :'Hello' ;
var mun = new Date ().getMinutes() >= 30 ? 'Good Evening' :'Hello' ;


   document.getElementById('target').innerHTML = chang , mun ;


})();
