//TS 3.9.5
//The inspection 'Function parameter naming convention' is OFF by default
//Case1
function CheckParameter1(d33) {

}

//Case2
function CheckParameter2(SA) {

}

//Case3
function CheckParameter3(фыв) {

}

//case4
declare namespace myLib {
    function makeGreeting(S: string): string;
    let numberOfGreetings: number;
}

//case5
interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
}

declare function greet(setting1: GreetingSettings): void;

//case6
type GreetingLike = string | (() => string)

declare function greet(G56: GreetingLike): void;
