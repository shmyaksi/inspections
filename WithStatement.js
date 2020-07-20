function one() {
    let a, x, y;
    let r = 10;

    with (Math) {
        a = PI * r * r;
        x = r * cos(PI);
        y = r * sin(PI / 2);
    }
    console.log(x)
}
one()



function f(foo, values) {
    with (foo) {
        console.log(values);
    }
}

f('ann','kate')
