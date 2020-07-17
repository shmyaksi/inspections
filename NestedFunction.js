function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}
add()

function a(x) {
    const b = y => x + y;
    return b;
}
console.log(a(3)(4));


function one(){
    function two(){
        console.log( "hello");

    }
    two()
}
one()
