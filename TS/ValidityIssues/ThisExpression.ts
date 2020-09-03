//TS 3.9.5
//The inspection ''this' expression which references the global object' is  by default

//case1
class maintain1 {
    name
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
        break
    }
}

this.admin1234()


//Case3
function maintain3() {
    let a = {duration: 50, title: ''}
    let k = 0
    while (k < 3) {
        a.duration = 10
        break
    }

}

this.a.duration

//case4
function checkThis() {
    let direction: 'left' | 'right';

}
console.log(this.direction.bold())

//case5
interface Building {
    room: {
        door: string,
        walls: string[],
    };
}

function checkThis1() {
    type Walls = Building['room']['walls'];
}
this.Walls.length
