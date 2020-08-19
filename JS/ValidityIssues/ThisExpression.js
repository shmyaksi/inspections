//'this' expression which references the global object is ON

//case1
class maintain1 {
    constructor(name) {
        this.name = name
    }
}

console.log(this.name)


//Case2
function maintain2() {
    const user1234 = {
        admin1234() {
            console.log("I am admin")
        }

    }
    const user234 = {}
    for (let i = 0; i < 3; i++) {
        user1234.admin1234?.()
        user234.admin1234?.()
        break
    }
}

this.admin1234()


//Case3
function maintain3() {
    let a = {duration: 50, title: ''}
    let k = 0
    while (k < 3) {
        a.duration ||= 10
        a.title ||= 'title is empty.'
        break
    }

}

this.a.duration

