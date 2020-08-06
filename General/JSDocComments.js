//Inspection is ON
//Case1
/**
 @function {myfunction}
 * @param  {proto}[proto]
 * @returns {proto}
 */
function myfunc() {

}

//Case2 //TODO разобраться
function My(name) {
    this.name = name;
}
My.prototype = {
    drive () {
        return "driving";
    }
};

function factorize (ctr) {
    return function (arg) {
        return new ctr(arg);
    };
}

/**
 * @function
 * @param {string} name
 * @returns {My}
 */
const createMy = factorize(My);

createMy('name');

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
    alert('Hello ' + somebody);
}

sayHello('froa')