export function hellogreet() {

}

export class flower {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    present() {
        return 'hello' + this.name;
    }
}


export interface GenericInterface1<U> {
    value: U
    getIdentity: () => U
}


export enum Number1 {
    a, b, c
}
