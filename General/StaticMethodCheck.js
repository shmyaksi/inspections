class ClassWithStaticMethod {
    #someMethod() { //method can be static
        return 'static method has been called.';
    }
}

//console.log(ClassWithStaticMethod.someMethod());

class carcar{
     greet(){

        return 'hello,'
    }
    constructor(carname) {
        this.carname =carname   }

    perform = () => `${carcar.greet()} ${this.carname}`

}
let ford = new carcar('ford')
console.log(ford.perform())




