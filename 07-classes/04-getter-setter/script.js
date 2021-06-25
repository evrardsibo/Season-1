// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor (firstname ,lastname){

            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name(){
                
            return this.firstname , this.lastname
            
        }
        set name (name){
            this.firstname = name[0]
            this.firstname = name[1]
        }
    }

    document.getElementById('run').addEventListener('click', () =>{

        var pers = new Person ('Evrard', 'Sibo')
        console.log(pers.name)
        console.log(pers.firstname);
        console.log(pers.lastname);

        pers.firstname ='Evrard';
        pers.lastname ='Sibomana';
        console.log(pers.name);
        console.log(pers.firstname);
        console.log(pers.lastname);
    })
})();
