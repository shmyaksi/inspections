function on() {

    for (let i = 0; i < 3; i++) {

        i = 10;
        console.log(i)
    }

}

on()

class People {

    constructor(age) {
        this.age = age;
    }

    ager() {
        for (this.age; this.age < 35; this.age++) {
            this.age++

            this.age = 2 // todo спорный момент

        }
        return this.age


    }
}

let me = new People(22)
console.log(me.ager())


class People1e {

    constructor(age) {
        this.age = age;
    }

    ager() {
        for (let j = 9; j < 35; j++) {
            j++


        }
        return this.age


    }
}