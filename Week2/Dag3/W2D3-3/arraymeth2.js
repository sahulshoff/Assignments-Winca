//A

// Schrijf een JavaScript functie die een bepaald item 
// weet te vinden en retourneren op basis van een bepaalde value.  
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". 
// Gebruik .find.

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie

    const findSpiderMan = superheroes.find((item) => {
        return item.name === "Spiderman";
    }) 
    
    console.log(findSpiderMan) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

    //B
    // In een array met integers. Zorg dat je een array returned met de integers 
    // verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.
    
    const doubleArrayValues = ([1, 2, 3]) 
    
    const itemArr = doubleArrayValues.map((array) => {
                return array *2
    } ); 

        
        // result should be [2, 4, 6]
    console.log(itemArr)

//C

//In een array met integers. Schrijf een JavaScript functie die een checkt 
//of er een integer in de array aanwezig is die groter is dan 10. 

const containsNumberBiggerThan10 = ([1, 4, 3, 6, 9, 7, 11]) 
// result should be true

const x = containsNumberBiggerThan10.some((number) => {
        return number > 10

})

console.log(x)

//D

//In een array met strings. Schrijf een JavaScript functie die kijkt
//of er een bepaalde string: "Italy" in de array aanwezig is.

const isItalyInTheGreat7 = (['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be true

const findItaly = isItalyInTheGreat7.find((array) => {
        return array === 'Italy'
})

console.log(findItaly);

//E

//In een array met integers. Schrijf een JavaScript functie die elke integer 
//vertienvoudigt.
//Gebruikt .forEach, of als je al wat advanced stuff wilt: gebruik .map.

const num = [1, 4, 3, 6, 9, 7, 11];

const tenfold = num.map((array) => {
    return array * 10
})

console.log(tenfold)
// result should be [10, 40, 30, 60, 90, 70, 110]

//F

//In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes 
//in de array onder de 100 zijn, en true or false retourneert.

const isBelow100 = ([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])

const lessThen100 = isBelow100.every((array) => {
    return array < 100;
    });
  
  console.log(
    "Onder de 100?:",
    (lessThen100)
  ); // false 
  

  //G

  const sum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

 const bigSum = sum.reduce((currentTotal,number) => {
     return number + currentTotal
 } ,0);

  console.log(bigSum)
  // result should be 1118