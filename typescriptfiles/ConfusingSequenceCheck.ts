function ad() {
    let a = 34, b = 4;
    let c: number;
    c = a+++b;
    console.log(c)
}

ad()

function ad2() {
    let a = 34, b = 4;
    let c: number;

    for (let i = 0; i < 5; i++) {
        {
            c = a-+-b; // TODO suggest to add these kind of cases
            console.log(c)
        }
    }
}

ad2()

console.log('------------------------------')

function ad3() {
    let a = 34, b = 4;
    let c: number;

    for (let i = 0; i < 5; i++) {
        {
            c = a - +-+b; // TODO suggest to add these kind of cases
            console.log(c)
        }
    }
}

ad3()

