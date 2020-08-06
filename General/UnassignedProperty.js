//Inspection is ON

//Case1
class s1 {
    constructor(greet2) {
        this.greet2 = this.n2 // it doesn't work in methods
        let n2 = this.n2
    }

}


//WEB-30520
class A2 {
    a = this.b; // error, 'b' is initialized later
    b = this.a; // ok
    c = this.m; // ok, because 'm' is hoisted
    q = this.q; // error, self-reference in an initializer
    s = () => this.s;
    f = function () {
        return this.f;
    }; // a different warning, because this is a 'suspicious this' case (WEB-29877)
    m() {
    }
}

//Case3
let asd ; //todo incorrect quick-fix (should be *=e, but here only =)
function k3(e){
    return asd*=e
}
k3(3)