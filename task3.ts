import type { ShelterAnimal } from './task2';


type IntakeProperty = {
    level: 1 | 2| 3;
}


const validLevel: IntakeProperty = {
    level: 2
};

console.log(validLevel)
// Output: { level: 2 }

// const invalidLevel: IntakeProperty = {
//     level: 9
// };

// console.log(invalidLevel)
// Output: The expected type comes from property 
// 'level' which is declared here on type 'IntakeProperty'


interface Microchiped {
    chipNumber: number;
}

const rabbit: ShelterAnimal & Microchiped = {
    name: "sam",
    species: "rabbit",
    ageYears: 3,
    weightKg: 5,
    chipNumber: 4
}