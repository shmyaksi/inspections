//Inspection is ON by default

//case1
function k22() {
    try {
        let counter = 1;
    } finally {
        throw new Error('counter');

    }
}

k22()

//case2
function k23() {
    try {
        function nono(m) {
            return m * m
        }

        nono(5)
    } finally {
        throw new Error('type smth else')

    }
}

k23()



