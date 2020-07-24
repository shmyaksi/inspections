/*export{}
function xe() {
    return xe.caller //TODO
}
console.log(xe())*/


function myFunc1() {
    if (myFunc1.caller === null) { //TODO
        return 'Эта функция была вызвана из верхнего уровня!';
    } else {
        return 'Эта функция была вызвана из ' + myFunc1.caller;
    }
}

console.log(myFunc1()) //TODO


function one(){
  //  console.log('jkfbksf')

    function two(){


        function three(){
            return three.caller //TODO (should appear)
        }
    }
}

console.log(one()) //returned undefined