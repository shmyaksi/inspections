//Inspection is ON by default


let x65 = 1

x65 = (x65++, x65) //TODO flipping ',' produces red code

console.log(x65)


let a65, b65, c65

a65 = b65 = 3, c65 = 4
console.log(a)

let x1, y1, z1

x1 = (y1 = 5, z1 = 6)
console.log(x1); // 6


function one65() {
    let arr = [4, 0, 2, 5]
    arr[0] = 5, 3  //TODO flipping ',' cause problem

    console.log(arr)
}

one65()

let m = !a65 ? b65 : c65 //conditional expression

function Calc() {
    let booksCount = 19
    let result

    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать'
    console.log(result)
}

Calc()


enum E {
    X, Y, Z
}

function f65(obj: { X: number }) {

    let resultt: number;

    resultt = (x65 < 5) ? x65 * 3 :
        (x65 > 1) ? x65 + 1 :
            x65 - 10 ? x65 + 2 : x65 = 0
    return resultt;
}

console.log(f())


interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    hh:number
    mm:number
    constructor(h: number, m: number) {
        this.hh = h
        this.mm=m
    }

    clocking(){
        let time:number;
        time = (this.hh<24)? this.hh+2: this.hh-2
        return time
    }
}

let myclock = new Clock(21,23)

console.log(myclock.clocking())