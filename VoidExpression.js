void function life() {
    console.log("Executed!");
}();

void function test() {
    console.log('boo!');

}();

try {
   floating_test();
} catch (e) {
   console.log(e);

}

function three(){
    let j=void(0);

    if(j===void(0)){
        console.log('error')
    }
}

three()
