//inspection 'continue' or 'break' inside 'finally' block' is ON by default

//todo : cases

//case1
function TryFinally2(m) {

    try {
        throw new Exception();
    } finally {
        switch (a) {
            case 1: {
                console.log("hola!")
                break; //todo разобраться
            }
        }
    }
}