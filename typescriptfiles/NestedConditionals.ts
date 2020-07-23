function book() {
    let booksCount = 19;
    let result;

    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать';
}

book()


function check() {
    let firstCheck = false,
        secondCheck = false,
        access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";
}

check()
let [aa, bb, ccc, v] = [2, 3, 4, 5];
let mm: any;
if (ccc) {
    mm = aa ? v : ccc //conditional expression
} else {
    mm = aa ? bb : ccc? bb-- : ccc--
}
console.log(mm)


interface MyFace {
    foo: number;
}

function cc(mynum:MyFace){
let resultt:string;
    resultt =  (mynum.foo)? 'hello' : !(mynum.foo)? 'goodbye': "ok"

}

let myy = {foo:10, mynum:'xns'};
cc(myy)