//Inspection  'switch' statement has no 'default' branch' is ON by default

//Case1
//WEB-44273
/*type Severity = 0 | 1 | 2;
type RuleLevel = Severity | 'off' | 'warn' | 'error';

const fn = (s: RuleLevel) => {
    switch (s) {
        case 'off':

    }
}*/

//Case2
/*type Cars = 'ford' | 'suzuki' | 'mazda'

function comp(ss: Cars) {
    switch (ss) {
        case "suzuki":
            break;
        case 'ford':
            return 'i am ford';

    }
}*/

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
