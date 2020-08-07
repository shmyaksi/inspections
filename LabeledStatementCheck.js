//inspection is OFF

function f879() {
    even:
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
}

f879()

function f877() {
    labelmark:
        for (let x = 0; x < 6; x++) {
            if (x == 3) {
                break labelmark;
            } else return 'continue'
        }
}

console.log(f877())


let k = 0;

function loops() {
    loop1:
        while (k < 6) {
            k += 1
            console.log(k)
        }

    loop1:
        for (let i = 0; i < 10; i++) {
            console.log(i)
        }
}

loops()