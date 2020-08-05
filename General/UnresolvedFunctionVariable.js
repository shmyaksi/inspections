//ghr() // todo maybe it should be an error by default (there is a tick already)


//const compiler = webpack(config);

function getData(data){
    console.log(data.someVar);
}


let myCar2 = {
    make : 'Ford',
    model :'Mustang',
   // yearr : 1969
}


console.log(myCar2.yearr) //todo undeclared property should be error(a tick)

if (myCar2.hasOwnProperty('yearr')) {
    console.log(myCar2.yearr);
}
function t6() {
    if (typeof undeclared !== 'undefined') {
        undeclared();
    }
}

