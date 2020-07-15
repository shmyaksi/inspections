let a = 0, b=123, c=41;
let sum = b+a; // this inspection doesn't work here
let a = 1, b=123, c=41;
let sum = b*a;


function checking(){ //doesn't work
    let  a = 1,b=123
    return b * a
}

function checking1(){
   return checking()
}
checking1()



for(let i=0; i<10;i++) { //as well
    let a = 1;
    if (a > 0) {
        a--;
        let sum = a * 5;
        console.log(sum);
    }
}
