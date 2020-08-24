//Inspection  'switch' statement has no 'default' branch' is ON by default
//TS 3.9.5

//Case1
//WEB-44273
type Severity = 0 | 1 | 2;
type RuleLevel = Severity | 'off' | 'warn' | 'error';

const fn12 = (s: RuleLevel) => {
    switch (s) {
        case 'off':

    }
}

//Case2
type Cars = 'ford' | 'suzuki' | 'mazda'

function comp(ss: Cars) {
    switch (ss) {
        case "suzuki":
            break;
        case 'ford':
            return 'i am ford';

    }
}

//Case3
function has() {
    let param
    switch (param) {
        case 0:
            break;
        case 1:
            break;

    }
}

//case4
function getValue1(val1?: number): number | 'nil' {
    switch (val1) { //todo inspection should be here
        case 1:
            let num = 0;
            break;
        case 2:
            return val1 ?? 'nil';
    }

}
