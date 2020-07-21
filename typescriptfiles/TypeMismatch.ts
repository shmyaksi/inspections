function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): null} = identity;


function two(x:string):number{
    
    return 'hello'
}
two()

function checkValue(value:string):string {
    return value*value
}
