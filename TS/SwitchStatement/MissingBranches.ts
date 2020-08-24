//inspection  'switch statement has missing branches' is ON
//TS 3.9.5

//WEB-44273
function Miss1() {
    type Severity = 0 | 1 | 2;
    type RuleLevel = Severity | 'off' | 'warn' | 'error';

    function miss1() {
        const fn = (s: RuleLevel) => {
            switch (s) {
                case 'off':
            }
        }
    }
}

//case2
function Miss2() {
    type Numbers = 0 | 1 | 2;

    function miss2() {
        const fn1 = (s: Numbers) => {
            switch (s) {
                case 1:
                    break;

            }
        }
    }
}


//Case3
function Miss3() {
    type getSmallPet = 'Fish' | 'Bird';

    function miss3() {
        const fn2 = (s: getSmallPet) => {
            switch (s) {
                case 'Fish':
                    break;

            }
        }
    }
}
//Case4
function Miss4() {
    enum miss4 {
        A1,
        B2,
        C3

    }

    function miss5(p: miss4.A1 | miss4.B2 | miss4.C3) {
        switch (p) {
            case 0:
                return 'A1'

        }
    }
}


