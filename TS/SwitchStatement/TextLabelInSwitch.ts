//Inspection ' Text label in 'switch' statement' is OFF by default
//TS 3.9.5

//Case1
function CaseWithFor() {
    let x;
    switch (x) {
        case 1:
            case2: for (let i = 0; i < 4; i++) {
                x += i;
            }
        case 3:
            break;

    }
}


//Case2
function label() {
    enum Options {
        FIRST,
        EXPLICIT = 1,
        BOOLEAN = Options.FIRST | Options.EXPLICIT
    }

    let opt = (s: Options) => {
        switch (s) {
            case Options.FIRST:
                case1:
                    return 'first';
            default:
                caseDefault:
                    return 'default';
        }
    }
}

//case3
function countCaps(value?: string) {
    switch (value) {
        case '1':
            case1:return value?.match(/[A-Z]/g)?.length ?? 0;
        case '2':
            break;
    }


}

//case4
function label2() {
    class Foo {
    }

    class Bar {
    }

    let fg = (s: Foo & Bar) => {
        switch (s) {
            case Foo:
                case1:return 'foo';
            case Bar:
                case2:break;
        }
    }
}
