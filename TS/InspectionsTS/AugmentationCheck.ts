import {Flowers123, Pet,} from "./AugmentationData";

declare module "./AugmentationData" {
    interface Pet {
        age: number;

        walk(location: string);
    }

    interface Flowers123 {
        greet()

    }
}

