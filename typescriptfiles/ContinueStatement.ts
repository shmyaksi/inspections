//Inspection is OFF

//Case1
function one99() {
    let text = '';
    for (let i = 0; i < 10; i++) {
        if (i !== 3) continue;
        text += "The number is " + i;
        console.log(text)
    }
}

one99()

//Case2
function two99() {
    let textt = " ";
    let j;
    let cars;
    cars = ['Saab', 'Volvo', 'Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") {
            continue;
        }
        textt += cars[j];
    }
    console.log(textt)
}

two99()

//Case3
class Car99 {
    carname: string;

    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return "I have a " + this.carname;
    }
}

let mycar99 = new Car99("Ford");

//Case4
function asdf() {
    let textt = "";
    let j;
    let cars;
    cars = ['Saab', 'Volvo', 'Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") continue;
        textt += cars[j];
    }
    console.log(mycar.present())
}

asdf()

//Case5
function three99() {
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

three99()

//Case6
function five99() {
    let i: number = 1
    while (i <= 10) {
        if (i % 5 == 0) {
            console.log("The first multiple of 5  between 1 and 10 is : " + i)

        } else continue
        i++
    }
}