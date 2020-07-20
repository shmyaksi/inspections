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
