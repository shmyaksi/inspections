//Inspection is OFF

function two4() {
    let textt;
    let cars = ["BMW ", "Volvo", "Saab", "Ford"];
    list: {
        textt += cars[0] + '';
        textt += cars[1] + '';
        break list;
    }
    console.log(textt);
}

two4()

function three4() {

    let str = '';
    loop1:
        for (let ii = 0; ii < 5; ii++) {

            if (ii === 1) break loop1;
            str = str + ii;

        }

    console.log(str);
}


three4()

function four45() {
    let k, j;


    loop1:
        for (k = 0; k < 3; k++) {

            loop2:
                for (j = 0; j < 3; j++) {

                    if (k === 1 && j === 1) {
                        break loop1;
                    }
                    console.log('k = ' + k + ', j = ' + j);
                }
        }
}

four45()