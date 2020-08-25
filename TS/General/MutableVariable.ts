//inspection is ON
//TS 3.9.5

//Case1
function mute1() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    for (let i = 0; i < data.length; i++) {
        var file = data[i];

        function nb() {
            if (data !== undefined) {
                console.log(file);
            }
        }
    }
}

//Case2
function init() {
    var name: any = [];
    for (let j = 0; j < name.length; j++) {
        name = 3;

        function displayName() {
            console.log(j + name);
        }
    }
    displayName();
}

init();
