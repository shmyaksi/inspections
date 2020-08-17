//Inspection is OFF
//Case1
function d6() {
    let a67, b67, c67
    let m = !a67 ? b67 : c67
}

d6()

//Case2
function Calc() {
    let booksCount = 19
    let result

    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать'
    console.log(result)
}

Calc()

//Case3
function f65(obj: { X: number }) {
    enum E {
        X, Y, Z
    }

    let x68;
    let result34: number = (x68 < 5) ? x68 * 3 :
        (x68 > 1) ? x68 + 1 :
            x68 - 10 ? x68 + 2 : x68 = 0;
    return result34;
}

console.log(f())

//Case4
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    hh: number
    mm: number

    constructor(h: number, m: number) {
        this.hh = h
        this.mm = m
    }

    clocking() {
        let time: number;
        time = (this.hh < 24) ? this.hh + 2 : this.hh - 2
        return time
    }
}

let myclock = new Clock(21, 23)
console.log(myclock.clocking())