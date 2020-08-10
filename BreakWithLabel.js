//Inspection is OFF
function f146() {
    let textt;
    let cars = ["BMW ", "Volvo", "Saab", "Ford"];
    list: {
        textt += cars[0] + '';
        textt += cars[1] + '';
        break list;
        textt += cars[2] + '';
        textt += cars[3] + '';
    }
    console.log(textt);
}

f146()

function f147() {
    let str = '';
    loop1:
        for (let ii = 0; ii < 5; ii++) {

            if (ii === 1) {
                break loop1;
            }
            str = str + ii;
        }
    console.log(str);
}

f147()


function f148() {
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

f148()
