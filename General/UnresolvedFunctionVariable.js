//Inspection is ON

//Case1
//ghr() // todo maybe it should be an error by default (there is a tick already)

//Case2
//const compiler = webpack(config);

//Case3
function getData(data) {
    console.log(data.someVar);
}

//Case4
function e3() {
    let myCar2 = {
        make: 'Ford',
        model: 'Mustang',
        // yearr : 1969
    }
    console.log(myCar2.yearr) //todo undeclared property should be error(a tick)

    if (myCar2.hasOwnProperty('yearr')) {
        console.log(myCar2.yearr);
    }
}

//Case5
function t6() {
    if (typeof undeclared !== 'undefined') {
        undeclared();
    }
}

