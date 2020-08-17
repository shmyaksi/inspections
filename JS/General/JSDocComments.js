//Inspection is ON
//Case1
/**
 @function {myfunction}
 * @param  {proto}[proto]
 * @returns {proto}
 */
function myfunc() {

}

//Case2
/**
 * @function
 * @param {string} name
 * @returns {My}
 */
function My(name) {
    this.name = name;
}

My.prototype = {
    drive() {
        return "driving";
    }
};

/**
 * @function
 * @param {string} name
 */
function factorize (ctr) {
    return function (arg) {
        return new ctr(arg);
    };
}

const createMy = factorize(My);
createMy();

//Case3
// WEB-7959
/**
 @param target
 */
function fn(obj) {
    return obj;
}

//Case4
/**
 * @param {string} somebody
 * @param {string} somehow
 */
function sayHello(somebody) {
    console.log('Hello ' + somebody);
}

sayHello('froa')
