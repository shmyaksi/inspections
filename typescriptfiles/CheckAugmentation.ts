export class Pet {
    name: string;

    feed(feedType: string) {
        console.log(feedType);
    }
}

Pet.prototype.walk = (location: string) => `Likes to walk in the ${location}`
