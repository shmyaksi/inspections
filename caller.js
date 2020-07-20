function xe() {
    console.log(xe.caller)
}
xe()


function myFunc() {
    if (myFunc.caller == null) {
        return 'Эта функция была вызвана из верхнего уровня!';
    } else {
        return 'Эта функция была вызвана из ' + myFunc.caller;
    }
}

console.log(myFunc())
