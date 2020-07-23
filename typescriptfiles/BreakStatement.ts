export{}
function one() {
    let text;
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is  " + i + " .";
    }
    console.log(text);
}

one()

function two() {
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

two()


function three() {

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


three()


function four() {
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

four()



let i: number = 1
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + i)
        break
    }
    i++
}



