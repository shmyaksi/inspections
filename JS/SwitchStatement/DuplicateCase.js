// 'Duplicate case label' is ON by default

//Case1
function dada1() {
    const expr = 'Papayas';
    switch (expr) {
        case 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'Oranges':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;

    }
}

//Case2
function dada2() {
    let foo = 5;
    switch (foo) {
        case 2:
            console.log(2);
            break;
        case 2:
            console.log('1');
    }
}

//case3
function dada3() {
    let foo1 = 5;

    function add1() {
        foo1 += 1
    }

    function decr() {
        foo1 -= 1
    }

    switch (foo1) {
        case 5:
            console.log('default')

        case 5:
            foo1 |>add1 |>decr
            break;
        case 4:
            add1();

    }
}

dada3()




