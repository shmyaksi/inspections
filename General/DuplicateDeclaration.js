function one()
{
    let e = {
        target: {
                value: 'abc',
                value: 'kjdv'
            },
            password: {
                value: 'xyz'

        }
    }
    console.log(e)

}


function two(a,b,a){
    let aa = 10;
     aa = 2; //TODO?

 console.log(aa)

}


class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.firstName = firstName; //todo?
        this.lastName = lastName;
    }
}


function abcde1() {
    let robotA = {name: "Bender", name: 'Ben'};
    let {name: nameA} = robotA;
    console.log(nameA);
}
let capitalize = str => str.toUpperCase()
let newName = abcde1()
// |>capitalize

function func1() {
    let a = {duration: 50, title: '',duration:3};
    let k=0
    while(k<1) {
        //  a.duration ||= 10;
        console.log(a.duration);
        k++
        //  a.title ||= 'title is empty.';
        console.log(a.title);

    }
}
func1()

class Counter  {
    get x() { return this.xValue; }
    set x(value) {
        this.xValue = value;
    }

    clicked() {
        this.x++;
    }

    constructor() {
        this.onclick = this.clicked.bind(this);
        this.xValue = 0;
    }

    connectedCallback() { this.render(); }
    connectedCallback() {  this.onclick}

    render() {
        this.textContent = this.x.toString();
    }
}


