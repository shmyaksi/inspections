//examples are only for JS
//todo: cases and  change the description


//Case1
type Easing11 = "ease-in" | "ease-out" | "ease-in-out";

class UIElement11 {
    animate(dx: number, dy: number, easing: Easing11) {

    }

    #one: Easing11 = '';
}

//Case2
function checkType(num: number): number {
    return ''
}

checkType(3, 4) //todo: here is signature mismatch probably, but got TypeMismatch


//Case3:WEB-37033
interface III {
    foof(x: number): string

    foor(x: number): string
}

class Impl implements III {
    foof(x: number): string {
        return {foo: "foo"}
    }

    foor = (x: number): string => ({foo: "foo"});
}


//case4
let fullName: string = `Bob Bobbington`;
let age33: number = '';



