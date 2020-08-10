//'Confusing floating point literal' is OFF

function floating_test2() {
    let a = 2., b = 0.2
    let x = parseFloat((a * b).toFixed(2))
    console.log(x);
}

floating_test2();

function floating_test1() {
    let a = .097, b = 0.2
    let x = parseFloat((a * b).toFixed(2))
    console.log(x);
}

floating_test1();

