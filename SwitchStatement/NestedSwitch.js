// inspection 'Nested switch statement' is OFF  by default

//case1
function hj1(w) {
    let y;
    switch (w) {
        case 1:
            switch (y) {
                case 2 :
                    return '2'

            }
    }
}

hj1(4)

//case2
function hj2() {
    let x, u;
    switch (x) {
        default:
            switch (u) {

            }
    }
}

hj2()


