import {Flowers123, Pet,} from "./MissingAugmentationImport";

declare module "./Data/MissingAugmentationImport" {
    interface Pet {
        age: number;

        walk(location: string);
    }

    interface Flowers123 {
        greet()

    }
}
