// Inspection 'default not last case in 'switch' is OFF by default
// TS 3.9.5

//Case1
function da1() {
    const expr = 'Papayas';
    switch (expr) {
        default:
            console.log(`Sorry, we are out of ${expr}.`);
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

    switch (foo1) {
        default:
            console.log('default')
        case 4:
            add1();

    }
}

da3()


//Case4
function def() {
    enum Options {
        FIRST,
        EXPLICIT = 1,
        BOOLEAN = Options.FIRST | Options.EXPLICIT
    }

    let opt = (s: Options) => {
        switch (s) {
            default:
                return 'default';
            case Options.FIRST:
                return 'first';
        }
    }
}
