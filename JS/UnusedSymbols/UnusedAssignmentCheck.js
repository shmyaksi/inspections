//Inspection is ON by default

//WEB-44606
function a200() {
    let i = {};
    [1, 2, 3].forEach(function () {
        let x0 = 22;
        i.la = [
            {
                name: 'laa',
                x0: 22,
                x1: x0 += 33
            }
        ]
    })
}

//Case:function
function a100(x) {
    x *= 2;
    return 'hello'
}

a100()





