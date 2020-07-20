let anon = function() {
    return 'I am anonymous';
}
anon();



function NotAnon(){
    let an = function(){

    }
    console.log('Im not anonymus')


}
NotAnon();


class marks{
    mark:string;
    constructor(themark){
        this.mark = themark;
    }

    greeting(){

        return 'Hello, you have '+this.mark;
    }


    arr= function(){

        return 2;
    }



}

let mymark = new marks (5)

console.log(mymark.greeting());
