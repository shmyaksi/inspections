//inspection 'Missing option in tsconfig.json' is ON be default
//TS 3.9.5

//https://www.typescriptlang.org/tsconfig#Basic_Options_6172

//case1
import React from "react";

class Rect extends React.Component() {
    render() {
        return <div>Hello</div>
    }
}

//case2
function CheckOption1() {
    const map87 = new Map([['foo', 'bar'], ['baz', '42']]);
}

//case3
function CheckOption2() {
    let das = 'sl'
    das.trimEnd(); //todo: no suggestion to add 'es2019' to lib
}

//case4
function CheckOption3() {
    let arr4 = [1, 2, 3]
    arr4.includes(5) //todo: add 'es2016' to lib
}


