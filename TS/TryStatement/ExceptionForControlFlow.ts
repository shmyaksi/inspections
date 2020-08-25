// inspection "Exception used for local control-flow" is ON
//TS 3.9.5

//Case1
function sawq(n) {
    try {
        throw n;
    } catch (e) {
        if (e <= 10) {
            throw new Error(e.message)
        } else {
            throw e;
        }
    }
}

//Case2
function sawq2(a) {
    try {
        function mn() {
            return a++
        }

        throw a
    } catch (e) {
        throw new Error('this is error')
    }


}

sawq2(1)


//Case3
function badGoto() {
    let m;
    try {
        function control(m) {
        }

        if (m === 0) {
            throw new Error();
        }

    } catch (e) {
        return e.message
    }
}
