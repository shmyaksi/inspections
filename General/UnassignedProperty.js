//Inspection 'Use of possibly unassigned property in a static initializer' is ON

//Case1
class s1 {
    constructor(greet2) {
        this.greet2 = this.n2
        let n2 = this.n2
    }

}

//WEB-30520
class A2 {
    a = this.b;
    b = this.a;
    c = this.m;
    q = this.q;
    s = () => this.s;
    f = function () {
        return this.f
    }
}
//Case3
let asd ; //todo incorrect quick-fix (should be *=e, but here only =)
function k3(e){
    return asd*=e
}
k3(3)