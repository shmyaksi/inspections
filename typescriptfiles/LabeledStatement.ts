export{}
function one(){
    even:                           //unnecessary label
        for (let i = 1; i <= 10; i++){
            console.log(i);
        }




}
one()
function two() {
    let j:number;

    myLabel:  // label is used
        if (j % 2 == 0) {
        if (j == 12) {
            console.log("12");
            break myLabel;
        }
        console.log("Odd number, but not 12");
    }
}

two()

function doSomething():any {

}

myLabel: {
    let x = doSomething();

    if (x > 0) {
        break myLabel;
    }

    console.log(x)
    }

doSomething()
function three() {
    myLabell: for (let i = 0; i < 10; i++) {// Compliant

        console.log("Loop");
        break myLabell;
    }
}

three()
