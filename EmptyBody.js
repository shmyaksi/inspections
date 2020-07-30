function emptyBodyOne(a, b) {
    if (a <= b) {
    } else {
        a--;
    }
    console.log(a, b)
}

emptyBodyOne(6, 5)


let i;

class Books {
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

book1 = new Books('love', 'smith', '2005');
console.log(book1.present());


let foo = {
    name: 'kate',
    job: 'musician',
    planet: 'russia'
}

function emptyBodyTwo() {
    if (foo.name === 'kate') {

    }
}
