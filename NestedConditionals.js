//Inspection is OFF

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

function x2() {
    let a, b, c, v;
    let m = !a ? b : c ? v : v * v
}






 
