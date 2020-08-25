//inspection ON
//TS 3.9.5

//Case1
function Thingy() {
    /** @protected */
    this._bar = 1;
}

console.log(new Thingy(#._bar))

//Case2
class ddd {
    #dddd

    constructor(dddd) {
        #dddd = dddd
    }
}

//Case3
class Point3 {
    #xxx

    constructor(
        xxx: number) {
        #xxx = xxx
    }
}
