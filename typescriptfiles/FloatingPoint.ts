function test() {
    let a = 0.1, b = 0.2
   // let x = 0.0000001 * 0.2;
    let x = parseFloat((a*b).toFixed(2))

    console.log(x);
}
test();