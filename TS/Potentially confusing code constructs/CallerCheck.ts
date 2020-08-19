//Inspection is ON
function xe() {
    return xe.caller
}

console.log(xe())


function myFunc1() {
    if (myFunc1.caller === null) {
        return 'Эта функция была вызвана из верхнего уровня!';
    } else {
        return 'Эта функция была вызвана из ' + myFunc1.caller;
    }
}

console.log(myFunc1())


function one12() {
    function two() {


        function three() {
            return three.caller
        }
    }
}

console.log(one12())
