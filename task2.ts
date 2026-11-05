// a species restricted to exactly dog, cat, rabbit

export interface ShelterAnimal {
    name: string;
    species: "dog" | "cat" | "rabbit" | "guinea pig";
    ageYears: number;
    weightKg: number;
}

const firstAnimal: ShelterAnimal = {
    name: "Beans",
    species: "cat",
    ageYears: 2,
    weightKg: 4.5
}

const secondAnimal: ShelterAnimal = {
    name: "Ralph",
    species: "guinea pig",
    ageYears: 1,
    weightKg: 1.2
}


// Find at least three different ways to make a ShelterAnimal 
// typed object literal fail to compile :

// const firstFailingAnimal: ShelterAnimal = {
//     name: "Ralph",
//     species: "guinea pig",
//     weightKg: 1.2
// }
// Output: Property 'ageYears' is missing in type 
// '{ name: string; species: "guinea pig"; weightKg: number; }' 
// but required in type 'ShelterAnimal'.



// const secondFailingAnimal: ShelterAnimal = {
//     name: "Ralph",
//     species: "guinea pig",
//     ageYears: 1,
//     weightKg: 1.2,
//     favouriteFood: "ankles"
// }
// Output: Object literal may only specify known properties, 
// and 'favouriteFood' does not exist in type 'ShelterAnimal'.



// const thirdFailingAnimal: ShelterAnimal = {
//     name: "Ralph",
//     species: "hamster",
//     ageYears: 1,
//     weightKg: 1.2
// }
// Output: Type '"hamster"' is not assignable to type 
// '"dog" | "cat" | "rabbit" | "guinea pig"'.