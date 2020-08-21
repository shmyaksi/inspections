//inspection is OFF

//Case1
function one0() {
    even:
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
}

one0()

//Case2
function two0() {
    let j: number;

    myLabel:
        if (j % 2 == 0) {
            if (j == 12) {
                console.log("12");
                break myLabel;
            }
            console.log("Odd number, but not 12");
        }
}

two0()

//Case3
function doSomething0(): any {

}

myLabel: {
    let x = doSomething0();

    if (x > 0) {
        break myLabel;
    }

    console.log(x)
}

doSomething0()

//Case4
function three0() {
    myLabell: for (let i = 0; i < 10; i++) {

        console.log("Loop");
        break myLabell;
    }
}

three0()
