//TS 3.9.5
// 'Duplicate case label' is ON by default

//Case1
function dada1() {
    const expr = 'Papayas';
    switch (expr) {
        case 'Papayas':
            break;
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

//Case3
enum miss44 {
    A1,
    B2,
    C3

}

function miss55(p: miss44.A1 | miss44.B2 | miss44.C3) {
    switch (p) {
        case 0:
            return 'A1';
        case 0:
            break;

    }
}

//case4
type getSmallPet1 = 'Fish' | 'Bird';

function miss37() {
    const fn2 = (s: getSmallPet1) => {
        switch (s) {
            case 'Fish':
                break;
            case 'Fish':
                return;

        }
    }
}




