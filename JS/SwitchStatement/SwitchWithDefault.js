// Inspection 'default not last case in 'switch' is OFF by default

//Case1
function da1() {
    const expr = 'Papayas';
    switch (expr) {
        default:
            console.log(`Sorry, we are out of ${expr}.`);
        case 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;

    }
}

//Case2
function da2() {
    let foo = 5;
    switch (foo) {
        case 2:
            console.log(2);
            break;
        default:
            console.log('default')
        case 1:
            console.log('1');
    }
}

//case3
function da3() {
    let foo1 = 5;

    function add1() {
        foo1 += 1
    }

    function decr() {
        foo1 -= 1
    }

    switch (foo1) {
        default:
            console.log('default')

        case 5:
            foo1 |>add1 |>decr
            break;
        case 4:
            add1();

    }
}

da3()

//case4
function funcfunc() {
    let a = {duration: 50, title: ''};
    let k = 0
    switch (a.duration) {
        case 40:
            a.duration ||= 40;
        default:
            a.title ||= 'title is empty.';
        case 30:
            a.duration ||= 30;
    }
}

funcfunc()

//case5
function dada3() {
    const map87 = new Map([['foo', 'bar'], ['baz', 42]]);
    const obj25 = Object.fromEntries(map87);
    switch (obj25.foo) {
        default:
            console.log('no cases')
        case 'b':
            console.log('continue')
            break;
        case 'ba':
            console.log('more')
            break;
        case 'bar':
            break;
    }

}
