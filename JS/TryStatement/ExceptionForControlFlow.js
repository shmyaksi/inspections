// inspection "Exception used for local control-flow" is ON
//Case1
function sawq(n) {
    try {
        throw n;
    } catch (e) {
        if (e <= 50) {
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


