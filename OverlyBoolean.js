//Inspection is OFF
function two() {
    let a = 2, b = 4, c = 5, d = 0;
    if (!(d === 4 || !(c !== 3) || !(b !== 3) || a === 0)) {  // depends on maximum number of terms in settings (here maximum is 3)
    }
    let summ = (a + b) / a * b * c;
    console.log(summ);
}

two()