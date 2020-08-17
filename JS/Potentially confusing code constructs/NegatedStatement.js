//Inspection is OFF
function comparison2(password) {
    if (password.length !== 0) {
        return
    } else {

    }
}

comparison2(3)


function numeric(adda){
    if (adda !== 0) {
        return;
    } else {
        adda += 1
    }
    console.log(adda)


}

numeric(5)


function str67(){
    let name = 'anna'
    if (!name) {
        name = 'another'
    } else return

}

str67()


//Case:class
let Person22 = (function () {
    let ageKey = Symbol();

    class Person22 {

        constructor(name) {
            this.name = name;
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
})();


