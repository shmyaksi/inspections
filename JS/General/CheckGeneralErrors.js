//'General errors' is ON

//Case1: SyntaxError: Unexpected token ':'
function h34() {
    let a: number;
}

//Case2:SyntaxError: Illegal break statement
function h7() {
    break;
}

//Case3:SyntaxError: Illegal continue statement: no surrounding iteration statement
continue

//Case4 : no error
let func = x => {
    yield //keywords
    x * x
}

//Case4:SyntaxError: Unexpected identifier
class ClassWithStaticMethod {
    private someMethod() {
        return 'static method has been called.'
    }
}

//Case5:SyntaxError: Getter must not have any formal parameters.
var o1 = {
    get p(a, b, c, d, e, f, g) {
    }
};
var o3 = {
    set p(a, b, c) {
    }
} //SyntaxError: Setter must have exactly one formal parameter.

//todo (incompatible numeric format left)


