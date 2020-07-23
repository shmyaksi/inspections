let x = 1

x = (x++, x)

console.log(x)


let a, b, c

a = b = 3, c = 4
console.log(a)

let x1, y1, z1

x1 = (y1 = 5, z1 = 6)
console.log(x1); // 6


function one() {
    let arr = [4, 0, 2, 5]
    arr[0] = 5, 3

    console.log(arr)
}

one()

let m = !a ? b : c //conditional expression

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

function f(obj: { X: number }) {

    let resultt: number;

    resultt = (x < 5) ? x * 3 :
        (x > 1) ? x + 1 :
            x - 10? x+2:x=0
    return resultt;
}

console.log(f(E))


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