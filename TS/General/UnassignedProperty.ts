//Inspection 'Use of possibly unassigned property in a static initializer' is ON
//TS 3.9.5

//Case1
class s1 {
    constructor(greet2) {
        greet2 = this.n2

    }

    greet2 = this.n2;
    n2 = this.greet2

}

//WEB-30520
class A2 {
    a = this.b;
    b = this.a;
    s = () => this.s;

}

//todo:cases

