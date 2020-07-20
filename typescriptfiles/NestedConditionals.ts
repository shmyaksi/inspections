function book() {
    let booksCount = 19;
    let result;

    result = (booksCount > 15) ? 'План на год выполнен!' :
        (booksCount > 10) ? 'Уже неплохо!' :
            'Читать и ещё раз читать';
}

book()


function check() {   //conditional expression
    let firstCheck = false,
        secondCheck = false,
        access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";
}

check()
let [a, b, c, v] = [2, 3, 4, 5];
let m: any;
if (c) {
    m = a ? v : c
} else {
    m = a ? b : c
}
