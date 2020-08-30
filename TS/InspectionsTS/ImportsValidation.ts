//inspection is ON
//TS 3.9.5

//case1
import hellogreet from "./ImpotCheck";

//case2
import {flowe, GenericInterface, Number1} from "./ImportData";

hellogreet()

//case3
let flower1 = new flower('rose')

//case4
class IdentityClass1<T> implements GenericInterface1<T> {
    value: T

    constructor(value: T) {
        this.value = value
    }


}

//case5
function importcheck() {
    let {a, b, c} = Number1
}
