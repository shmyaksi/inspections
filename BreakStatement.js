for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    let text += "The number is " + i + "<br>";
}


let cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
}


let str = ''; //break statement with label

loop1:
    for (let i = 0; i < 5; i++) {
        if (i === 1) {
            break loop1;
        }
        str = str + i;
    }




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
