function potentiallyBuggyCode() {
    debugger;

}

potentiallyBuggyCode()

function summa() {

    let a = 5, b = 0;

    debugger;
    return a + b;
}

console.log(summa())

class flowers {
    greeting: string;

    constructor(flower) {
        this.greeting = flower;
    }

    greet() {

        return 'give me ,' + this.greeting + ', please';
        debugger;
    }


}