
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const today = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    var currentDate = today.toLocaleDateString('en-GB',options);
    var currentTime = today.toLocaleTimeString('en-GB');

    var newValue = `${currentDate} , ${currentTime}`;
    
    document.getElementById("target").innerHTML = newValue;

})();
