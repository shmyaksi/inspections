//TS 3.9.5
//Inspection 'Missing augmentation import' is ON


//Case1
export class Pet {
    name: string;

    feed(feedType: string) {
        console.log(feedType);
    }
}

Pet.prototype.walk = (location: string) => `Likes to walk in the ${location}`


//Case2
export class Flowers123 {
    name: string

}

Flowers123.prototype.greet = () => `hello + ${name}`
