//inspection 'Unresolved JavaScript function' is ON
//TS 3.9.5

//case1
interface UnresolvedCheck {
    greet(name: string): string

}

class CheckOne implements UnresolvedCheck {
    greet = (name: 'mike') => {
        return `hello + ${name}`
    }
}

let me1 = new CheckOne()
console.log(me1.greeting('mike'))

//case2
class Greeters {
    static greet(greeting: string, ...names: string[]) {
        return greeting + " " + names.join(", ") + "!";
    }
}

let FirstPerson = new Greeters()
FirstPerson.greet1("Hello", "Steve", "Bill");

//case3
class GreetersMore extends Greeters {

}

let SecondPerson = new GreetersMore()
SecondPerson.greets('max')

//case4
function doSomething(): void {
    console.log("Printing something");
}

window.setTimeout(() => {
    doSomethin();
}, 3000);
