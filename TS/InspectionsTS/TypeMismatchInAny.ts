//inspection 'Type mismatch in 'any' type context' is ON
//TS 3.9.5

//case1
function assert(val: any) {
    if (typeof val !== 'number') {
        val.toLocaleString(10)
        throw new Error('Not a number');
    }
}

function yell(val: any) {
    assert(val);
    val.valueOf(10, 10)
    val.toArray('1')
    return val.toString(4);

}
