//Inspection is OFF
//Case1
void function onon() {
    console.log('boo!')

}
()

//Case2
function threee() {
    let j = void (0);

    if (j === void (0)) { // TODO suggest to change to 'undefined'
        console.log('error')
    }
}

threee()

//Case3
function lala():void{

}
lala()

//Case4
function doSomething(callback: () => void) { //shouldn't appear

    const a = callback
    a();

}

//Case5
function aNumberCallback(): number {
    return 2;
}


console.log(doSomething(aNumberCallback))

//Case6
interface school{
    teacher:void;
}


