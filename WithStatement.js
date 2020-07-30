function f89() {
    let a, x, y;
    let r = 10;

    with (Math) {
        a = PI * r * r;
        x = r * cos(PI);
        y = r * sin(PI / 2);
    }
    console.log(x)
}
f89()



function f88(foo, values) {
    with (foo) {
        console.log(values);
    }
}

f88('ann','kate')
