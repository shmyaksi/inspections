//Inspection is OFF

//Case1
function book11() {
    let booksCount = 19;
    let result;
    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать';
}

book11()

//Case2
function check() {
    let firstCheck = false,
        secondCheck = false,
        access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";
}

check()

//Case3
function dfs() {
    let [aa, bb, ccc, v] = [2, 3, 4, 5];
    let mm: any;
    if (ccc) {
        mm = aa ? v : ccc
    } else {
        mm = aa ? bb : ccc ? bb-- : ccc--
    }
    console.log(mm)
}

dfs()

//Case4
interface MyFace1 {
    foo: number;
}

function cc(mynum: MyFace1) {
    let resultt: string;
    resultt = (mynum.foo) ? 'hello' : !(mynum.foo) ? 'goodbye' : "ok"

}

let myy = {foo: 10, mynum: 'xns'};
console.log(cc(myy))