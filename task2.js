// a species restricted to exactly dog, cat, rabbit
var firstAnimal = {
    name: "Beans",
    species: "cat",
    ageYears: 2,
    weightKg: 4.5
};
var secondAnimal = {
    name: "Ralph",
    species: "guinea pig",
    ageYears: 1,
    weightKg: 1.2
};
// Find at least three different ways to make a ShelterAnimal 
// typed object literal fail to compile 
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
var thirdFailingAnimal = {
    name: "Ralph",
    species: "hamster",
    ageYears: 1,
    weightKg: 1.2
};
