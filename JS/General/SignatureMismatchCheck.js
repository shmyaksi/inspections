//Inspection is ON(optionality of parameters - tick)
function doSomething(a, b) {
    return (a)
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
        this.another('', '')
    }

    another(p) {
    }
}

let hell = function (name) {
return "Hello "+name
}
console.log(hell())
