//Inspection is OFF by default
//TS 3.9.5

//Case1
function sa(a) {
    try {
        function mn() {
            return a++
        }
    } catch (e) {

    }


}

sa(1)


//Case2
function handling(argument: string) {
    try {
        let result = this.markLibrary(argument);
    } catch (e) {

    }
}

//case3
function example1(param: number, callback: (err: Error, result: number) => void) {
    try {
        const exampleResult = 1;
        callback(null, exampleResult);
    } catch (e) {

    }
}



