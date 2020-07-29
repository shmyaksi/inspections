let f986 = (a, b) => a + b
f986();

function NotAnon(){
    let an = function(){
    }
    console.log('Im not anonymus')
}
NotAnon();

class marks{
   constructor(mark){
       this.mark = mark;
   }

   greeting(){

       return 'Hello, you have '+this.mark;
   }

   arr= function(){
       return 2;
   }

}

mymark = new marks (5)

console.log(mymark.greeting());


//TODO
let someFunc = someFunction('text');

function someFunction(param) {
    if (param === 'text') return function (value) { //should be anonymus
    };
    else if (param === 'test') return function (value) {
    };
}


function firstcase() {
    let megaCommunistDataFromTheCiaArray = [
        {name: 'Lenin', id: 1},
        {name: 'Marx', id: 2},
        {name: 'Gramsci', id: 3}
    ];

    let communistNames = megaCommunistDataFromTheCiaArray.map(communist => communist.name);//TODO callback?
    console.log(communistNames); // Prints: ['Lenin', 'Marx', 'Gramsci']
}

firstcase()


let Arr = [2, 3, 4, 5]

console.log(Arr.map(function (x) {
    return x + 1
})); //TODO  callback?


function secondcase() {
    let megaCommunistDataFromTheCiaArray1 = [
        {name: 'Lenin', id: 1},
        {name: 'Marx', id: 2},
        {name: 'Gramsci', id: 3}
    ];


    let getCommunistName = communist => communist.name; //todo ^


    let communistNames1 = megaCommunistDataFromTheCiaArray1.map(getCommunistName);

    console.log(communistNames1); // Prints: ['Lenin', 'Marx', 'Gramsci']

}
secondcase()