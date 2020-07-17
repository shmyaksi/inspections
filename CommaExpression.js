
let x = 1;

x = (x++, x);

console.log(x);


x = (2, 3);

console.log(x);


let a, b, c;

a = b = 3, c = 4; 
console.log(a); 

let x1, y1, z1;

x1 = (y1 = 5, z1 = 6); 
console.log(x1); // 6 




function one() {
    let arr = [4, 0, 2, 5];
    arr[0]=5,3;

console.log(arr)
}
one()



let m = !a ?b :c //conditional expression

function Calc() {
    let booksCount = 19;
    let result;

    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать';
console.log(result)
}
Calc()


