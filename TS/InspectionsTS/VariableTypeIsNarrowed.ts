//TS 3.9.5
//Inspection 'Variable type is narrowed by a type guard' is ON by default


//case1 WEB-43152
class Dickson {
    test2(): void {
        let b = false;
            [0, 1].forEach(
            i => {
                if (i === 1) b = true
            }
        );
        console.log(b);
    }

}
//case2
function CheckIsNarrowed() {
    let something: any;
    if (typeof something === "string") {
        something.charAt(2);
        something.substr(0, 10);
    }
}

//case3
function CheckNarrow(x: number | string) {
    if (typeof x === 'string') {
        console.log(x.substr(1));
    }

}

//case4
class Foo45 {
    foo = 123;
    common = '123';
}

class Bar45 {
    bar = 123;
    common = '123';
}

function doStuff(arg: Foo45 | Bar45) {
    if (arg instanceof Foo) {
        console.log(arg);
        console.log(arg.common);
    }
}

//case5
type TriState = 'yes' | 'no' | 'unknown';

function logOutState(state:TriState) {
    if (state == 'yes') {
        state.charAt(2)
    }

}


