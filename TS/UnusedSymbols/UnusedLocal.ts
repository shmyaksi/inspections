//TS 3.9.5
//The inspection 'Unused local symbol' is ON  by default

//todo: description

//Case1
function a200() {
    let j = [1, 2, 3, 4];
    return 'hello2'
}

a200()

//Case:function
function a300() {
    let i, j, k;
    return j + k;
}

a300()

//Case:object
function a400() {
    let fd = {
        name: 'gerr',
        age: 300

    }
}

a400()

//Case:class
class Hon {
    private member;

}

//case: interface
interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
