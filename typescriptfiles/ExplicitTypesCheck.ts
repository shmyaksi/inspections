function one() {

    let b: number = 5;
    return a * a;

}

one()
let a: number = 3.14

class cars {

    name: string = 'ford';

    constructor(theName: string) {
        this.name = theName;
    }

    present() {

        if (this.name === 'subaru') return 'hello'
        else return 'goodbye'
    }


}

let mycar = new cars('subaru')
console.log(mycar.present());
