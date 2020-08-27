//Inspection is ON

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
function C125(param) {
    param ??= "default";
    let i;
    while (i === undefined) {
        console.log('ok')
        break
    }
}

//Case4
function C125() {
    let textt = "";
    let j;
    cars = ['Saab', 'Volvo', 'Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") {
            continue;
        }
        textt += cars[j];
    }
    console.log(mycar.present())
}

//Case5
let asd

function k3(e) {
    return asd *= e
}













