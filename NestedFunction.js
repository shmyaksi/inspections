function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}


function a(x) {
    const b = y => x + y;
    return b;
}
console.log(a(3)(4));
