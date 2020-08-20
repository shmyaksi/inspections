//'Fallthrough in 'switch' statement' is ON

//Case1
function CheckFall1() {
    const map87 = new Map([['foo', 'bar'], ['baz', 42]]);
    const obj25 = Object.fromEntries(map87);
    switch (obj25.foo) {
        case 'b':
            console.log('continue')
        case 'ba':
            console.log('more')
        case 'bar':
            break;
    }

}

//case2
function CheckFall2() {
    let a = {duration: 50, title: ''};
    let k = 0
    switch (a.duration) {
        case 40:
            a.duration ||= 40;
        case 30:
            a.duration ||= 30;
    }
}

fall2()

//case3
function CheckFall3(opt) {
    switch (opt) {
        case 1:
        //todo empty case isn't triggered by this inspection(but if insert ';' - ok
        case 2:
            return "Two"
        default:
            break
    }
}

CheckFall3(4)

