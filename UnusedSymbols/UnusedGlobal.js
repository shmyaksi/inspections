//Inspection is ON by default

//Case1
const aq = 10;

//Case2
class dadd {

}

//Case3
function wave() {
    return 'hh'
}

//Case4
let saw1 = {
    name: 'saw1'
}

//Case5
let arr4 = []

//WEB-44177
class Pqr {
    static* t() { //todo: still no inspection
        let x = 5;
    }

    static* t2() {
        let x = 5;
    }
}

