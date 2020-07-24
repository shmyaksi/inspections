function A(n) {
    n = 3;
    return n

}

console.log(A(5))

class Cars {

    constructor(number) {
        this.number = number;

    }

    calc(k) {
        k = k * this.number;
        return k
    }
}

let m = new Cars(32);
console.log(m.calc(2))

let ar1=['me','myself','I']
function B(d){
    d='nina';
    result = ar1[0] +' '+d;
   // result  = toString()
    return result


}
console.log(B())