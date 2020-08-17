//Inspection is OFF


function one45() {
    let text;
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is  " + i + " .";
    }
    console.log(text);
}

one45()


function s23() {
    let i: number = 1
    while (i <= 10) {
        if (i % 5 == 0) {
            console.log("The first multiple of 5  between 1 and 10 is : " + i)
            break
        }
        i++
    }
}

s23()
