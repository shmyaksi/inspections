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
    das.trimEnd(); //todo: no suggestion to add 'es2019' to lib
}

//case3
function CheckOption3() {
    let arr4 = [1, 2, 3]
    arr4.includes(5) //todo: add 'es2016' to lib
}

//case4
function CheckOption4() {
    let tarr = Uint8Array.of(12, 5, 3);
    console.log(tarr.includes(5));
}

//case5
function CheckOption5() {
    let myItems: Array<string> = ["blah", "ok", "jj"];
    let exists = myItems.includes('bla'); //todo:should suggest to add library "dom","es2017"
    console.log(exists)
}

