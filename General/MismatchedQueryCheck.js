//inspection is ON

function* example() {
    const collection: [] = [] //WEB-36813
    collection.push(1);
    yield collection;
}

function test1() { //WEB-40325
    let bool, b;
    const horizontalVector = [0],
        verticalVector = [0],
        hiddenVector = bool ? horizontalVector : verticalVector,
        a = b;

    return hiddenVector[0];
}

function fru() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi", "Lemon", "Pineapple");
    return 'f'
}

console.log(fru())