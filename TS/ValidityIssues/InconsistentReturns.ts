//TS 3.9.5
//The inspection 'Function with inconsistent returns' is OFF by default


//todo: no inspection in all cases (but it is in JS)

//Case1
function carry1(m): string {
    if (m > 0) return 'positive'
    if (m < 0) return 'negative'
}

carry1(0)

//Case2
function solve_quad(a, b, c) {
    if (a === 0 || b * b < 4 * a * c)
        return
    return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
}

//Case3
function doSomething12(condition) {
    if (condition === 0) {
        return true
    } else {
        return
    }
}

//Case4
function doSomething1(condition) {
    if (condition) {
        return true
    }
}

//Case5
function fooboo(callback) {
    if (callback) {
        return void callback()
    }
}




