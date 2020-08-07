//Inspection is ON

function emptyBodyOne(a, b) {
    if (a <= b) {
    } else {
        a--;
    }
    console.log(a, b)
}

emptyBodyOne(6, 5)

class Books {
    i;

    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;

        while (i < 5) {

        }
    }

    present() {
        return 'my favourite book is ' + this.name;
    }
}

let book1 = new Books('love', 'smith', '2005');
console.log(book1.present());

function emptyBodyTwo() {
    let foo = {
        name: 'kate',
        job: 'musician',
        planet: 'russia'
    }
    if (foo.name === 'kate') {

    }
}
