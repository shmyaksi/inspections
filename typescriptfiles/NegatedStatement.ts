//Inspection is OFF

//Case1
function comparison1(password) {
    if (password.length !== 0) {
        return

    } else {


    }
}

comparison1(3)

//Case2
function numeric(adda) {

    if (adda !== 0) {
        return;
    } else {
        adda += 1
    }
    console.log(adda)


}
numeric(5)

//Case3
function str() {
    let name = 'anna'
    if (!name) {
        name = 'another'
    } else return

}
str()


//Case4
let Person11 = (function () {
    let ageKey :number;

    class Person11 {
        name: string;

        constructor(theName: string) {
            this.name = theName;
            this[ageKey] = 20;
        }

        comparison() {
            if (!this.name) return 'go away'
            else return 'hello';

        }

        greet() {

            console.log(`name: ${this.name}, age: ${this[ageKey]}`);
        }
    }

    return Person11;
})();

let joe1 = new Person11('Joe');
joe1.greet();


//Case5
interface MyFace {
    foo: number;
}

function cccc(mynum: MyFace) {
    if (!(mynum.foo))
        console.log(mynum.foo)
    else return
}

let my = {foo:10, mynum:'xns'};
cccc(my)