//WEB-43075
const foo = JSON.parse("{}");


for (let key in foo) {
    console.log(key);
}


const validKey = (obj, key) => {
    return key && Object.prototype.hasOwnProperty.call(obj, key);
};

for (let key in foo) {
    if (validKey(foo, key)) {
        console.log(key);
    }
}

//let object123={}

for (let namename in object123) {
   console.log(namename); //todo suggest to convert to if statement "if (object123.hasOwnProperty(name)) "
}

const actionList = [];
function foo1() {

    for (let i in actionList) {
        if (actionList[i] !== undefined) {
            actionList[i] = "";
        }

    }
}
console.log(actionList)