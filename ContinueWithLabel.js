//Inspection is OFF

function four() {
    let str = '';
    loop1:
        for (let i = 0; i < 5; i++) {
            if (i === 1) {
                continue loop1;
            }
            str = str + i;
        }

    console.log(str);
}

four()


