function one() {
    let text;
    for (let i = 0; i < 10; i++) {
        if (i !== 3) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
}

one()



function two() {
    let textt = "";
    let j;
    cars = ['Saab','Volvo','Subaru'];
    for (j = 0; j < cars.length; j++) {
        if (cars[j] === "Saab") {
            continue;
        }
        textt += cars[j] ;
    }
    console.log(textt)
}
two()




class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    }
}
mycar = new Car("Ford");

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


function four() { //continue statement with label
    let str = '';

    loop1:
        for (let i = 0; i < 5; i++) {
            if (i === 1) {
                continue loop1;
            }
            str = str + i;
        }

    console.log(str);
}
four()




