//'Destructuring properties with the same key can be merged' is ON
function k2() {
    const {
        target: {
            value: aa,
            type: bb,
            value: c
        }
    } = {
        target: {
            value: 2,
            type: 'second'
        }
    }
}

function k3() {
    let {
        size: {
            width: cc,
            height: dd,
            width: df
        }
    } =
        {
            size: {
                width: 100,
                height: 200
            }
        }
}

var {x: {y: a, z: b, y: t}} = {x: {y: 7, z: 8}} //WEB-37903

function abcd() {
    let robotA = {name: "Bender", name: 'kjdkdj'};
    let robotB = {name: "Flexo"};
    let {name: nameA, name} = robotA;
    let {name: nameB} = robotB;

    console.log(nameA);
}

abcd()

function k4() {
    let optionss = {
        title: "Menu",
        width3: 100,
        width3: 3,
        height: 200
    };
    let {title, width3: width33, width3, height} = optionss;
}

function abcde() {
    let robotA = {name: "Bender", name: 'Ben'};
    let {name: nameA, name} = robotA;
    console.log(nameA);
}

let capitalize = str => str.toUpperCase()
let newName = abcde()
// |>capitalize




