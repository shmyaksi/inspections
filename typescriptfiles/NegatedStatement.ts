
function comparison(password) {

    if (password.length !== 0) {
        return
    } else {

    }
}

comparison(3)


function numeric(adda) {

    if (adda !== 0) {
        return;
    } else {
        adda += 1
    }
    console.log(adda)


}

numeric(5)


function str() {
    let name = 'anna'
    if (!name) {
        name = 'another'
    } else return

}

str()


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

let joe = new Person11('Joe');
joe.greet();


interface MyFace {
    foo: number;
}

function cccc(mynum:MyFace){

    if (!(mynum.foo))
    console.log(mynum.foo)
    else return
}

let my = {foo:10, mynum:'xns'};
cccc(my)