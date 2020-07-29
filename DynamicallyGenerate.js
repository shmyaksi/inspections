function looseJsonParse(obj) {
    return eval("(" + obj + ")");
}

console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))

let obj = {a: 20, b: 30};

function getPropName() {

}

let propName = getPropName();

eval('var result = obj.' + propName);

let myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    console.log("Hello!");
}

myFunction()


function myFunc() {
    myVar = setTimeout(function () {
        console.log(("Hello"))
    }, 3000);
}

function myStopFunction() {
    clearTimeout(myVar);
}


function free() {
    let a = 20;
    if (a > 10) console.log(a * a);
}

setTimeout(free, 2000)


let timerId = setInterval(() => console.log(('tick')), 2000);


setTimeout(() => {
    clearInterval(timerId);
    console.log('stop');
}, 5000);