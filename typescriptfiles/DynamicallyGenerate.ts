function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))

let obj = { a: 20, b: 30 };

function getPropName() {

}

let propName = getPropName();

eval( 'var result = obj.' + propName );

let myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000); //TODO
}

function alertFunc() {
    console.log("Hello!");
}

myFunction()