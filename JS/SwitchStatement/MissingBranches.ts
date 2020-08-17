//inspection  'switch statement has missing branches' is ON

//WEB-44273
type Severity = 0 | 1 | 2;
type RuleLevel = Severity | 'off' | 'warn' | 'error';

const fn = (s: RuleLevel) => {
    switch (s) { //todo: quickfix 'create missing...' add missing but inspection is still here,one more quickfix - duplicate declaration
        case 'off':
    }
}

//case2
type Numbers = 0 | 1 | 2;
const fn1 = (s: Numbers) => { //todo: the same problem like in an above case
    switch (s) {
        case 0: //todo: case 0 exists but is suggested to be added again
    }
}