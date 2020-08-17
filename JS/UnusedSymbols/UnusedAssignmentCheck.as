//Inspection is ON by default

//WEB-44606
//Case1
function a200() {
    var i = {};
    [1, 2, 3].forEach(function () {
        var x0 = 22;
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

//Case3
function sad() {
    var y;
    var myObj: Object = {x: 20};
    for (var i: String in myObj) {
        trace(i + ": " + myObj[i]);
        y += 10;
    }

}