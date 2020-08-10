//'Execution of dynamically generated JavaScript' is OFF
//Case1
function looseJsonParse(obj) {
    return eval("(" + obj + ")");
}

console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))

//Case2
let obj = {a: 20, b: 30};

function getPropName() {

}

let propName = getPropName();

eval('var result = obj.' + propName);

let myVar;

//Case3
function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    console.log("Hello!");
}

myFunction()

//Case4
function myFunc() {
    myVar = setTimeout(function () {
        console.log(("Hello"))
    }, 3000);
}

function myStopFunction() {
    clearTimeout(myVar);
}

//Case5
function free() {
    let a = 20;
    if (a > 10) console.log(a * a);
}

setTimeout(free, 2000)

//Case6
function der() {
    let timerId = setInterval(() => console.log(('tick')), 2000);


    setTimeout(() => {
        clearInterval(timerId);
        console.log('stop');
    }, 5000);
}

der()

