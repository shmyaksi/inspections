function xe() {
    return xe.caller //TODO
}
console.log(xe())


function myFunc() {
    if (myFunc.caller === null) { //TODO
        return 'Эта функция была вызвана из верхнего уровня!';
    } else {
        return 'Эта функция была вызвана из ' + myFunc.caller;
    }
}

console.log(myFunc()) //TODO


function one(){
  //  console.log('jkfbksf')

    function two(){


        function three(){
            return three.caller //TODO (should appear)
        }
    }
}

console.log(one()) //returned undefined