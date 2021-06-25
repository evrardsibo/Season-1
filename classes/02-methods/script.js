//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () =>{

        var pers = {

            firstName: "Evrard",
            lastName: "Sibomana",
            full : function () {
                return this.firstName + ' ' + this.lastName
                
            }

        }
        console.log('Hello'+ ' ' + pers.full())
    })
})();
