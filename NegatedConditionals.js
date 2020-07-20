function one(){
    let a,b,c
let m = !a ?b :c
 return m

}
one()


function abcdd(b,c){
    let bc = 'mother';
    if (!bc) {
        let m=b;
        console.log('access denied');
    }
    else m=c;
}

abcdd(2,3)


let Person = (function () {
    let ageKey = Symbol();

    class Person {

        constructor(name) {
            this.name = name; 
            this[ageKey] = 20; 
        }



        comparison(){
            if (!this.name) return 'go away'
            else return 'hello';

        }

        greet() {
            
            console.log(`name: ${this.name}, age: ${this[ageKey]}`);
        }
    }

    return Person;
})();

let joe = new Person('Joe');
joe.greet();
