let text;
for (let i = 0; i < 10; i++) {
    if (i !== 3) {
        continue;
    }
    text += "The number is " + i + "<br>";
}



let textt = "";
let j;
for (j = 0;j < cars.length; j++) {
    if (cars[j] === "Saab") {
        continue;
    }
    textt += cars[j] + "<br>";
}

let k = 0;
let n = 0;

while (k < 5) {
    k++;

    if (k === 3) {
        continue;
    }

    n += k;
}


let str = '';  //continue statement with label

loop1:
    for (let i = 0; i < 5; i++) {
        if (i === 1) {
            continue loop1;
        }
        str = str + i;
    }

console.log(str);
