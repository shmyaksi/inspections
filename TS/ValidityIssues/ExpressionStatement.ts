//TS 3.9.5
//The inspection 'Expression statement which is not assignment or call' is ON  by default

//Case1
class supersuper {
    aging
    super() {
        this.aging
    }
}

//Case2
const arr45 = [1, 2]
const mapping1 = arr45.map(num => {
    num + 1
})

//Case3
class Human {
    age
    present() {
        this.age + 1
    }
}


//Case5
function case55() {
    let obg55 = {
        type: 'type',
        age: 'age'
    }
    obg55.type
}

//Case6
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    config.color+1
    return { color: config.color || "red", area: config.width || 20 };
}

//case7
let mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    result > -1;
};

//case8
interface StringArray {
    [index: number]: string;
}

function createArray() {
    let myArray: StringArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];
    myStr+1
}

