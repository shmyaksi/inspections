//TS 3.9.5
// inspection 'Variable is declared and being used in different 'case' clauses' is ON by default

//case1
function masd44(width, height) {
    let area = (height ?? 100) * (width ?? 50);
    switch (width) {
        case 20:
            let area = (height ?? 100) * (width ?? 50);
        case 40:
            return area;
        default:
            console.log('default')
    }
}

//Case2
function test11(something, something_else) {
    switch (something) {
        case 1:
            switch (something_else) {
                case 'a':
                    const foo = 123;
                    const bar = 2;
                    console.log('bar: ', bar);
                    break;
                case 'b':
                    const bar1 = foo * 2;
            }
            break;
    }
}

test11(1, 'a')

//Case3
interface MyObject {
    label: string
}

function MyFunc(obj: MyObject) {
    switch (obj.label) {
        case 'first':
            let foo: number;
            break;
        case 'second':
            foo += 2;
            break;
    }
}

//Case4
function changeUndefinedToNull<T>(value: number): T {
    switch (value) {
        case 1:
            let foo = 'a';
        case 2:
            foo += 'b';
            return;
    }
}

//case5
enum Direction {
    Up = '1',
    Down = '2',
    Left = '3',
    Right = '4',
}


function directions(s: Direction) {
    switch (s) {
        case Direction.Up:
            break;
        case Direction.Left:
            break;
        case Direction.Down:
            let upup = 2;
        case Direction.Right:
            upup++
            break;
    }

}

//Case6
function getValue(val?: number): number | 'nil' {
    switch (val) {
        case 1:
            let num = 0;
        case 2:
            num += 1
            return val ?? 'nil';
    }

}




