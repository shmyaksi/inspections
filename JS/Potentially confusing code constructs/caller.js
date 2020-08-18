//Inspection is ON

function xe() {
    return xe.caller
}

console.log(xe())

//WEB-46702
function myFunc() {
    if (myFunc.caller == null) {
        return 'Эта функция была вызвана из верхнего уровня!';
    } else {
        return 'Эта функция была вызвана из ' + myFunc.caller;
    }
}

console.log(myFunc())


function one(){
    function two(){
        function three(){
            return three.caller
        }
    }
}

console.log(one())

