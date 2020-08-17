//Inspection is ON

//Case1
function three3(a, b) {
    if (a <= b) {
    } else {
        a--;
    }
    console.log(a, b)
}

three3(6, 5)


//Case2
let i;

class books {
    name;
    author;
    year: string;

    constructor(theName, theAuthor, theYear) {
        this.name = theName;
        this.author = theAuthor;
        this.year = theYear;

        while (i < 5) {

        }
    }

    present() {
        return 'my favourite book is ' + this.name;
    }

}

let book1 = new books('love', 'smith', '2005');
console.log(book1.present());

//Case3
function der4() {
    let foo = {
        name: 'kate',
        job: 'musician',
        planet: 'russia'
    }

    if (foo.name === 'kate') {

    }
}

der4()

//Case4
function present3(color: string) {
    if (color === 'green') {

    }
    return 'my colour is ' + color;


}

console.log(present3('red'))

//Case5
function foo3() {
    let k = 0;
    if (k > 0) while (k < 4) {

    }
    return k
}

console.log(foo3())

