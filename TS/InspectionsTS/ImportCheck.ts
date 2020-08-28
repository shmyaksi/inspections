function hello() {

}


export default hello;

export default class flower{
    name:string;
    constructor(theName:string){
        this.name = theName;
    }

    present(){

        return 'hello' +this.name;
    }
}
