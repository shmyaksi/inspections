//Inspection is ON
function f899() {
    let a, x, y;
    let r = 10;

    with (Math) {
        a = PI * r * r;
        x = r * cos(PI);
        y = r * sin(PI / 2);
    }
    console.log(x)
}

f899()


function f889(foo, values) {
    with (foo) {
        console.log(values);
    }
}

f889('ann', 'kate')
