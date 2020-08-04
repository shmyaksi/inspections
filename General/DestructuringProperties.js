const  {
    target: {
            value: aa,
            type:bb,
            value: c
        }

} = {
    target : {
        value: 2,
        type:'second'
    }

}

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


var {x: {y: a, z: b, y: t}} = {x: {y: 7, z: 8}} //WEB-37903



function abcd() {
    let robotA = {name: "Bender", name: 'kjdkdj'};
    let robotB = {name: "Flexo"};

    let {name: nameA,name} = robotA;
    let {name: nameB} = robotB;

    console.log(nameA);
}
abcd()

let options = {
    title: "Menu",
    width: 100,
   width:3,
    height: 200
};

let { title,width,width} = options; // todo ( inspection works but code - no)

//console.log(title); // Menu

function abcde() {
    let robotA = {name: "Bender", name: 'Ben'};
    let {name: nameA,name} = robotA;
    console.log(nameA);
}
let capitalize = str => str.toUpperCase()
let newName = abcde()
 // |>capitalize




