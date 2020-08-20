//Inspection is ON

//Case1
function e3() {
    let myCar2 = {
        make: 'Ford',
        model: 'Mustang'
        // yearr : 1969

    }
    console.log(myCar2['yearr'])
    console.log(myCar2.yearr)
}

e3()

//Case2
class mers {
    age123
}

let mersmers = new mers()
console.log(mersmers.ag)

//Case3
function e4() {
    let save = JSON.parse(localStorage.getItem('save000'))
    let playerLocation = save[1].playerLocation //todo: call 'create field' on playerLocation. Result : red code
}

e4()

//Case4
function e5() {
    const json = '{"result":true, "count":42}'
    const obj6 = JSON.parse(json)
    let obj66 = obj6[1].hello
}

e5()
