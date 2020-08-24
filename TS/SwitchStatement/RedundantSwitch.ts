// Inspection 'switch' statement is redundant and can be replaced' is ON by default
//TS 3.9.5

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

//case5
type getSmall = 0 | 1;

function miss33() {
    const fn2 = (s: getSmall) => {
        switch (s) {

        }
    }
}
