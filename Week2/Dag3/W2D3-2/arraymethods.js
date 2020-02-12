//A 
//Schrijf een JavaScript functie om het woord "cool" aan een array met `strings` toe te voegen. 
//Gebruik de .push method.
    //  - Test Data

const arrayWithWords = ["nice","awesome","tof"];

const addTheWordCool = (array) => {
    array.push("cool");
    return array
}
         
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//B
//Schrijf een JavaScript functie die het aantal elementen 
//in een array retourneert. 


const amountOfElementsInArray = (array) => array.length
    

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C

//Schrijf een JavaScript functie om het éérste element uit 
//een array te retourneren.
//Bij welk cijfer begint een array ookalweer met tellen?

const selectBelgiumFromBenelux = (array) => array.shift();

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie"

//D
//Schrijf een JavaScript functie om 
//het laatste element uit een array te retourneren. 

const lastElementInArray = (array) => array.pop();

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

//E

//Schrijf een JavaScript functie om het eerste element uit een array te halen en 
//het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. 
//Wat is het verschil tussen deze functies? Hint: mutability. 

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
    
    const impeachTrumpSlice = (array) => {
        const newArray = array.slice(0,1);
        return newArray;
    }
    
      	
    
    const impeachTrumpSplice = (array) => {
        const removedElement = array.splice(0, 1);
        console.log(
          "removed element:",
          removedElement,
          "De mutated array, Trump is missing:",
          array
        );
        return array;
      };


    console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
    console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

   // Bij slice blijft de oude array bestaan maar bij splice bestaat alleen nog de nieuwe array. 

   //F

   //Write a simple JavaScript program to join all elements 
   //of the following array into a string (with spaces). 
   //ps: deze opdracht hebben we in het Engels gelaten omdat er een 
   //dikke tip in zit over welke array method je gaat gebruiken. 

   
   const stringsTogether = (array) => array.join();
   
   
   console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
   //resultaat: "Winc Academy is leuk ;-}"

   //G

   //Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 
   //1 array ['array1', 'array2']


  
   
   const combineArrays = (array1,array2) => array1.concat(array2);

   console.log(combineArrays([1,2,3], [4,5,6])); 
     
// result should be [1,2,3,4,5,6] 



  