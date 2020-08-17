//Inspection is ON(optionality of parameters - tick)
function doSomething(a,b) { // todo: a is unused ,should it proposed to be deleted?
    return (b);
}

doSomething(3)


//WEB-33842
function f() {
    return (arguments);
}
f()

function addData(prod_number) {
}

function fun(p) {
    addData(p);
}
fun(); //no warning
fun(1,5);

//WEB-32145
class HeroDetailComponent {
    save(p) {
        this.another('', '') //todo second quick-fix change nothing
    }

    another(p) {
    }
}

let hell = function (name) {
return "Hello "+name
}
console.log(hell())
