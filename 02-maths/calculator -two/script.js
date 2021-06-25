// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        // perform the operation
        var one = Number(document.getElementById("op-one").value);
        var two = Number(document.getElementById("op-two").value);
        switch(operation){
            
            case 'addition':
                var add = one + two ;
                alert(add);
                break

                case 'substraction':
                    var sub = one -two ;
                    alert(sub);
                    break

                    case 'multiplication':
                        var mul = one * two;
                        alert(mul);
                        break
                        
                        case'division':
                        var div = one / two ;
                        alert(div)
                        break

                        default : ('again')
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();