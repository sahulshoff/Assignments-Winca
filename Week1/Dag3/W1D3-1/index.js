// Oefening Deel 1 Objecten

let person = {
    name: "Sven",
    age: 40,
    evaluations: [7, 10, 9]
};

console.log(person); // loggen volledig object

console.log(person.name); // loggen propertie van object dot notation

console.log(person.age); // loggen propertie van object dot notation

console.log(person["name"]); // loggen propertie van object bracket notation

console.log(person["age"]); // loggen propertie van object bracket notation

console.log(person.evaluations); // loggen propertie van object dot notation

// Oefening Deel 2 Arrays

let setColours = ["green", "blue", "red"]; // Array
let message = {
   greeting: "Hi ik ben een object", // Object
}

console.log(setColours); // loggen volledige Array

console.log(setColours.length); //lengte van de Array bepalen

console.log(setColours[0]); // 1 item van de Array selecteren

console.log(setColours[setColours.length-1]); // laatste item van de Array selecteren

setColours.push("yellow"); // nieuwe string achteraan de Array toevoegen

setColours.push(5); // nieuw nummer achteraan de Array toevoegen

setColours.push(message); // nieuw object achteraan de Array toevoegen

console.log(setColours); // nieuwe Array loggen

console.log(setColours[setColours.length-1]); // laatste item van nieuwe Array loggen

// Oefening deel 3 Real life Object


const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
		food: {
			favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
	{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
			favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
	{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
			favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

// Log de naam van het laatste kattenras.  
// Resultaat: American Bobtail

console.log("Naam kat 3:", catBreeds[2].name);

// Log de energy levels van de eerste kat. 
// Resultaat: 5

console.log("Energy Level kat 1:", catBreeds[0].energy_level);

// Log het eerste temperament van de temperamenten van de tweede kat. 
// Resultaat: Affectionate

console.log("Temperament 1 kat 2:", catBreeds[1].temperament[0]);

// Log het laatst temperament van de temperamenten van de derde kat. 
// Resultaat: Sensitive

const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
console.log("Laatste temperament kat 3:", catBreeds[2].temperament[lengthTemperamentsCatThree -1])

// Log het favoriete voedsel van de derde kat
// Resultaat: meaty things

console.log("Favoriet voedsel kat 3", catBreeds[2].food.favourite_food);