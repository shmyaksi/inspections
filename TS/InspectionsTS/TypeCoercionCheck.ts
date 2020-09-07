//Inspection 'Equality operator may cause type coercion' is OFF
//ts 3.9.5

//Case1
function one0(x: number) {
    if (x != 5) return `ok`;


}

//case2
function two0(y: number) {
    if (y == null) return 'not ok'
}

//case3
function three0(c: number) {
    if (c == 2) return
}

//case4
class Vinyl<VinylProps> {
    title1: string;
    name123: boolean;
    num: number

    get vinylId() {
        if (this.title1 != '') return 'true'
    }

    get title() {
        if (this.name123 != true) return 'false'
        if (this.num == 0) return '0'
    }
}

//case5
function foo<T extends any>(arg: T) {
     if(arg!=9) return 9

}
