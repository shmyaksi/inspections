//inspection 'Missing augmentation import' is in Data/MissingAugmentationImport.ts

import {Flowers123, Pet,} from "./Data/MissingAugmentationImport";


declare module "./Data/MissingAugmentationImport" {
    interface Pet {
        age: number;

        walk(location: string);
    }

    interface Flowers123 {
        greet()

    }
}
