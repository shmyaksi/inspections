//'Confusing floating point literal' is OFF

function floating_test() {
    let a = 2., b = 0.2
    // let x = 0.0000001 * 0.2;
    let x = parseFloat((a * b).toFixed(2))
    console.log(x);
}

floating_test();

function floating_test1() {
    let a = .097, b = 0.2
    // let x = 0.0000001 * 0.2;
    let x = parseFloat((a*b).toFixed(2))
    console.log(x);
}
floating_test1();
