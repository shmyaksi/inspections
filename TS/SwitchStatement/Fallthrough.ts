//'Fallthrough in 'switch' statement' is ON
//TS 3.9.5

//case1
//WEB-8350
function CheckFall3(opt) {
    switch (opt) {
        case 1:
            let foo = 2;
        case 2:
            return "Two"
        default:
            break
    }
}

CheckFall3(4)

//Case2
type Numbers1 = 0 | 1 | 2;

function CheckFall1() {
    const fn1 = (s: Numbers1) => {
        switch (s) {
            case 1:
                ;
            case 2:
                break
            case 0:
                return;

        }
    }
}

//Case3
function CheckFall2() {
    let x = 10, y = 5;
    switch (x - y) {
        case 0:
            console.log("Result: 0");
            break;
        case 5:
            console.log("Result: 5");
        case 10:
            console.log("Result: 10");
            break;
    }
}

//Case4
function CheckFall4() {
    let marks: number = 8;

    switch (marks) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            console.log('Low numbers');
        case 5:
        case 6:
        case 7:
        case 8:
            console.log('Middle numbers');
        case 9:
        case 10:
            console.log('Good numbers');
            break;
        default:
            console.log('invalid numbers');
    }
}

//Case5
function CheckFall5() {
    let marks: number = 9;

    switch (true) {
        case (marks >= 0 && marks <= 4):
            console.log('Low numbers');
        case (marks >= 5 && marks <= 8):
            console.log('Middle numbers');
            break;
        case (marks >= 9 && marks <= 10):
            console.log('Good numbers');
            break;
        default:
            console.log('invalid numbers');
    }
}

//case6
function CheckFall6() {
    let var1 = 'hello';

    let var2: number | string | boolean;
    var2 = true;

    function getTypeOf(v) {
        if (typeof (v) === 'number')
            return 1;
        else if (typeof (v) === 'string')
            return 2;
        else if (typeof (v) === 'boolean')
            return 3;
        return 0;
    }

    switch (getTypeOf(var1)) {
        case 1:
            console.log('typeof number');
        case 2:
            console.log('typeof string');
            break;
        case 3:
            console.log('typeof boolean');
        default:
            console.log('invalid type');
            break;
    }

}
