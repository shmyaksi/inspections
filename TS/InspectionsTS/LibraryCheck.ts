//inspection 'Required TypeScript library is not included in tsconfig.json' is ON
//ts 3.9.5
////https://www.typescriptlang.org/tsconfig#Basic_Options_6172

//case1
function CheckOption1() {
    const map87 = new Map([['foo', 'bar'], ['baz', '42']]);
}

//case2
function CheckOption2() {
    let das = 'sl'
    das.trimEnd(); // WEB-36981: this method is for 'es2019' lib and this is ok to the discussion in the issue
}

//case3
function CheckOption5() {
    let myItems: Array<string> = ['a', 'b', 'c'];
    let exists = myItems.includes('bla'); // WEB-36981: this method is for 'es2015' lib and this is ok to the discussion in the issue
    console.log(exists)
}


