//Inspection 'Redundant nesting in template literal' is ON
function one1() {
    let colorr = "red";
    let countt = 3;
    let message = `I have ${colorr ? `${`countt`} ${`colorr`}` : countt} apples`;
    console.log(message)
}

function one2() {
    let gr = `Hello, ${`Brave ${"New"}`} ${"World"}!`

    let gr1 = `${`greet the new `}${`intern`} `
    console.log(gr1)
}