//Inspection is OFF

//Case1
function f44() {
    let text;
    for (let i = 0; i < 10; i++) {
        if (i !== 3) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
}

f44()

//Case2
function f45() {
    let textt = "";
    let j;
    let cars = ['Saab', 'Volvo', 'Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") {
            continue;
        }
        textt += cars[j] ;
    }
    console.log(textt)
}
f45()

//Case3:class
class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return "I have a " + this.carname;
    }
}
mycar = new Car("Ford");

//Case4:array
function asdf() {
    let textt = "";
    let j;
    cars = ['Saab','Volvo','Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") {
            continue;
        }
        textt += cars[j] ;
    }
    console.log(mycar.present())
}

asdf()


//Case5
function three() {
    let k = 0;
    let n = 0;
    while (k < 5) {
        k++;

        if (k === 3) {
            continue;
        }

        n += k;
    }
    console.log(n);
}

three()

//Case6
function five(d) {
    const user1 = {
        admin() {
            console.log("I am admin");
        }

    }

    const user2 = {};
    for (let i = 0; i < 3; i++) {
        if (i === 2)
            user1.admin?.();
        user2.admin?.();
        continue;

    }

}

//Case7
function six() {
    const name = "charles"

    const greet = name => `Hello, ${name}`

    const capitalize = str => str.toUpperCase()

    const exclaim = str => `${str}!!!`
    for (let i = 0; i < 3; i++) {

        if (i === 2) continue;
        const loudGreeting = name
            |> greet
            |> capitalize
            |> exclaim
    }
}

