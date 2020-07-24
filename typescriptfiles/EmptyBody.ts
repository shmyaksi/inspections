export {}

function three(a, b) {
    if (a <= b) {
    } else {
        a--;
    }
    console.log(a, b)
}

three(6, 5)


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


let foo = {
    name: 'kate',
    job: 'musician',
    planet: 'russia'
}

if (foo.name === 'kate') {

}

function present(color: string) {
    if (color === 'green') {

    }
    return 'my colour is ' + color;


}

console.log(present('red'))

function fooo() {
    let k = 0;
    if (k > 0) while (k < 4) {
        //k++

    }
    return k
}

console.log(fooo())

