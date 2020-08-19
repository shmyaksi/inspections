//Inspection is ON

function e3() {
    let myCar2 = {
        make: 'Ford',
        model: 'Mustang'
        // yearr : 1969

    }
    console.log(myCar2['yearr'])
    console.log(myCar2.yearr)


    if (myCar2.hasOwnProperty('yearr')) {
        console.log(myCar2.yearr)
    }
}

e3()

//todo: add cases
