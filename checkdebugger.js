function potentiallyBuggyCode() {
    debugger;
    
}

potentiallyBuggyCode()
function summ(){

    let a = 5, b = 0;

    debugger;
    return  a+b;
}

console.log(summ())

class flowers{
    constructor(flower) {

        this.flower = flower;
    }


   greet(){
        debugger;
        return 'give me ,'+this.flower+', please';
        //debugger;
   }


}
debugger;
sunflower = new flowers('sunflower')

console.log(sunflower.greet())

const user1 = {
    admin() {
        console.log("I am admin");
    }

}

const user2 = {};
for (let i=0;i<3;i++) {
    debugger
    user1.admin?.();
    user2.admin?.();
    break
}
