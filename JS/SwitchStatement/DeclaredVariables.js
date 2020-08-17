// inspection 'Variable is declared and being used in different 'case' clauses' is ON by default

//case1
function masd44(width, height) {
    let area = (height ?? 100) * (width ?? 50);
    switch (width) {
        case 20:
            let area = (height ?? 100) * (width ?? 50);
        case 40:
            return area;
        default:
            console.log('default')
    }
}

//Case2
function dq() {
    const map87 = new Map([['foo', 'bar'], ['baz', 10]]);
    switch (map87) {
        case 1:
            var obj00 = Object.fromEntries(map87);

        case 2:
            return obj00.baz

    }
}

//Case3
function test11(something, something_else) {
    switch (something) {
        case 1:
            switch (something_else) {
                case 'a':
                    const foo = 123;
                    const bar = 2;
                    console.log('bar: ', bar);
                    break;
                case 'b':
                    const bar1 = foo * 2;
            }
            break;
    }
}

test11(1, 'a')
test11(2, 'b')