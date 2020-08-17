// Inspection 'switch' statement is redundant and can be replaced' is ON by default


//Case1
function masd1() {
    let s = 10
    switch (s) {
        default :
            return 'default'
    }
}

masd1()

//Case2
function masd2() {
    let s = 4
    switch (s) {
        case 1:
            return 'case 1'
    }

}

//case3
function masd3() {
    let foo1 = 5;

    function add1() {
        foo1 += 1
    }

    function decr() {
        foo1 -= 1
    }

    switch (foo1) {
        case 5:
            foo1 |>add1 |>decr
            break;

    }
}

//Case4
function masd4(width, height) {
    let area = (height ?? 100) * (width ?? 50);
    switch (width) {
        case 20:
            return area;
        default:
            break;

    }

}