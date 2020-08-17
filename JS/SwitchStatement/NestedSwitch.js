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


function hj3() {
    let a = {duration: 50, title: ''};
    let k = 0
    switch (a.duration) {
        case 40:
            a.duration ||= 40;
            switch (k) {
                case 0:
            }
        case 30:
            a.duration ||= 30;
    }
}

hj3()

