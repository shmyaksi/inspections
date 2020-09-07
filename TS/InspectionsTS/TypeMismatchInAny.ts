//inspection 'Type mismatch in 'any' type context' is ON
//TS 3.9.5

//todo:cases

//case1
function assert(val: any) {
    if (typeof val !== 'number') {
        throw new Error('Not a number');
    }
}

function yell(val: any) {
    assert(val);

   return val.toString(4);
    //return val.toArray('1')
}
