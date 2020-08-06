//Inspection is ON
//WEB-43075
function d2() {
    const foo = JSON.parse("{}");


    for (let key in foo) {
        console.log(key);
    }
}

//Case2
function d3() {
    const validKey = (obj, key) => {
        return key && Object.prototype.hasOwnProperty.call(obj, key);
    };

    for (let key in foo) {
        if (validKey(foo, key)) {
            console.log(key);
        }
    }
}

//Case4
function d4() {
    //let object123 = {}
    for (let namename in object123) {
        console.log(namename); //todo suggest to convert to if statement "if (object123.hasOwnProperty(name)) "
    }
}

//Case5
const actionList = [];

function foo1() {

    for (let i in actionList) {
        if (actionList[i] !== undefined) {
            actionList[i] = "";
        }

    }
}

console.log(actionList)