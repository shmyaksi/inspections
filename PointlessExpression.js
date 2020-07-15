let a1 = 0, b1=123*1, c1=41;
let sum = b+a; 


function checking(){ //doesn't work
    let  aa = 1,bb=123
    return bb * aa
}

function checking1(){
   return checking()
}
checking1()



for(let i=0; i<10;i++) { 
    let abc = 1;
    if (abc > 0) {
        abc--;
        let sum = abc * 1;
        console.log(sum);
    }
}


function checking2(){ //doesn't work
    let  aa = 1,bb=123
    return bb / 0;
}






const s=0

function checking3(){ //doesn't work
    let  aa = 1,bb=123
    return bb*s;
}


function checking4(){ //doesn't work
    let  aa = 1,bb=123
    return bb/s;
}


