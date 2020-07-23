function aaa() {
    let s;
    for (let i = 0; i < 5; i++) {
        s = ++i;
        console.log(s)
    }

}

aaa()
let ua = 3, ub = 2, uc = 1
ua = ++ub + uc--;
let fo = 0, bar = 0
fo = bar++ / 4;
console.log(bar);


class AA {
    quantity: number;

    constructor(qua: number) {
        this.quantity = qua;
    }

    ca() {
        if (this.quantity === 0) {

            return ++this.quantity

        } else return 'good'
    }
}

let mynew = new AA(20)
console.log(mynew.ca())