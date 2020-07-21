mport { Pet } from "./CheckAugmentation";
declare module "./pet" {
    interface Pet {
        age: number;
        walk(location: string);
    }
}


const pet = new Pet();
