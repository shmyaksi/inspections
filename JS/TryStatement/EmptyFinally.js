//Inspection is OFF by default

function k24() {
    try {
        function nono(m) {
            return m * m
        }

        nono(5)
    } finally {

    }
}

k24()