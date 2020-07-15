for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    let text += "The number is " + i + "<br>";
}


let cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
}
