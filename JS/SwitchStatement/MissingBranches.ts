//inspection  'switch statement has missing branches' is ON

//WEB-44273
type Severity = 0 | 1 | 2;
type RuleLevel = Severity | 'off' | 'warn' | 'error';

const fn = (s: RuleLevel) => {
    switch (s) {
        case 'off':
    }
}

//case2
type Numbers = 0 | 1 | 2;
const fn1 = (s: Numbers) => {
    switch (s) {
        case 1:
            break;

    }
}