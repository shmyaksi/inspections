// inspection 'Nested switch statement' is OFF  by default
//TS 3.9.5

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
                default:
                    break;

            }
    }
}

hj2()

//Case3
function Nested() {
    interface A {
        type: 'a',
        number: Number
    }

    interface B {
        type: 'b',
        number: Number
    }

    type Letter = A | B

    interface One {
        type: 'one'
    }

    interface Two {
        type: 'two'
    }

    type Number = One | Two;


    function we(letter: Letter): boolean {
        switch (letter.type) {
            case 'a':
                return true;

            case 'b':
                const number = letter.number;
                switch (number.type) {
                    case 'one':
                        return true;
                    case 'two':
                        return true;
                }
        }
    }
}

