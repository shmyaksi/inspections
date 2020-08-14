//Inspection is ON by default

//case1
class TryFinally {
    static doLogic() {
        try {
            throw new Exception();
        } finally {
            return true;
        }
    }
}

//case2
function kar() {
    let foo1 = 5;

    function add1() {
        foo1 += 1
    }

    function decr() {
        foo1 -= 1
    }

    try {
        foo1 |>add1 |>decr

    } finally {
        return 'error'

    }
}

kar()