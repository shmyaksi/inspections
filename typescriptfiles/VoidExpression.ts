void function onon() {
    console.log('boo!')

}
()

function threee(){
    let j=void(0);

    if(j===void(0)){ // TODO suggest to change to 'undefined'
        console.log('error')
    }
}

threee()


function lala():void{

    //console.log('dsdgsg')
}
lala()


function doSomething(callback: () => void) { //shouldn't appear

   const a = callback

    a();

}


function aNumberCallback(): number {
    return 2;
}


console.log(doSomething(aNumberCallback))

interface school{
    teacher:void;
}


