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

        return 'give me ,'+this.flower+', please';
        debugger;
   }


}

sunflower = new flowers('sunflower')

console.log(sunflower.greet())
