//Inspection is ON

//Case1
ghr()

//Case2
const compiler = webpack(config);

//Case3
function getData(data) {
    console.log(data.someVar);
}

//Case4
function e3() {
    let myCar2 = {
        make: 'Ford',
        model: 'Mustang'
        // yearr : 1969

    }
    console.log(myCar2['yearr'])//todo :it isn't reported as unresolved property
    console.log(myCar2.yearr) // todo (put the tick in inspection's description 'report undeclared property', but there is no error


    if (myCar2.hasOwnProperty('yearr')) {
        console.log(myCar2.yearr);
    }
}

e3()

//Case5
function t6() {
    if (typeof undeclared !== 'undefined') {
        undeclared();
    }
}

