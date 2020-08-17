//inspection is ON
let data =[1,2,3,4,5,6,7,8,9,0]
for (let i = 0; i < data.length; i++) {
    var file = data[i];

    function nb() {
        if (data !== undefined) {
            console.log( file);
        }
    }
}

function init() {
    var  name = ['1','2','3'];
    for(let j=0; j<name.length; j++) {
        name= 3;

        function displayName () {
            console.log(j + name);
        }
    }
    displayName();
}
init();

