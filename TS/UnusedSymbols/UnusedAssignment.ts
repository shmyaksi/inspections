//TS 3.9.5
//The inspection 'Unused assignment' is ON by default
//Case:function
function a100(x) {
    x *= 2;
    return 'hello'
}

//case2
function compute(x){
    return x
}
function a200(i) {
    i = compute(10);
}

//case3
class Ginger{
    goto(q){
       q*=q
    }
}

//case4
class Ginger1{
    naming
    goto(q) {
        this.naming *= q //todo: discuss: here is unused assignment too
    }
}



