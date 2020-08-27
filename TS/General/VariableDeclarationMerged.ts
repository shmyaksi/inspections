//Inspection is ON
//TS 3.9.5

//Case1
function C123() {
    let c;
    if (c = 9) return c
}

//Case2
function C124() {
    let s, i;
    for (i = 0; i < 5; i++) {
        s = ++i;
    }
}


//Case3
function C125() {
    let textt = "";
    let j;
    let cars = ['Saab', 'Volvo', 'Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") {
            continue;
        }
        textt += cars[j];
    }

}

//Case4
let asd

function k3(e) {
    return asd *= e
}

//Case5
function MissCheck123() {
    let variable1: number[];
    variable1 = [];
    return variable1[''];

}

//Case6
abstract class MissCheck234 {
    k
    merge() {
        let i;
        i = []
        return i + this.k
    }
}

