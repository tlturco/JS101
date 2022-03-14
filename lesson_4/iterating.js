//iterating over an object

let numberOfPets = {
  dogs: 2,
  cats: 4, 
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length) {
  let currnetPet = pets[counter];
  let currentPetNumber = numberOfPets[currnetPet];
  console.log(`I have ${currentPetNumber} ${currnetPet}!`);
  counter += 1;
}

//Easier way (use for/in loop for objects)
for (let currnetPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currnetPet];
  console.log(`I have ${currentPetNumber} ${currnetPet}!`);
}