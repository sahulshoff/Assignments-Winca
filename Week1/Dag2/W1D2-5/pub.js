const age = 28;
const isFemale = true;
const driverStatus = "bert"; 
const name = "Bram";
const totalAmount = 80;

// check age

if (age >= 18){

    console.log("Jij mag naar binnen");
} else {
    
    console.log("Jij bent nog te jong dus tot over een paar jaar!");
}

// check gender

if (isFemale){
    console.log("Het eerste drankje is van het huis");

} else {
     console.log("Trakteer een dame op een drankje");
}

// check level of alcohol

if (driverStatus === "bob") {
    console.log("Goede reis en tot de volgende keer");

} else {  
    console.log("En nu heel snel die auto uit!!!!");
}

// check for discount

if (age >= 18 && age <= 25){
    console.log("Je krijgt 25% korting");

} else{
    console.log("Helaas geen korting maar je kunt het vast betalen");
}

// check for free beer 50 years

if (name === "Sarah" || name === "Bram"){
    console.log("Aangezien wij nu even oud zijn krijgt u een biertje");

} else {
    console.log("Biertje is 3 euro!");
}

// check total amount for type of present

if (totalAmount >= 100){
    console.log("Gratis champagne");

} else if (totalAmount > 50){
    console.log("Gratis Nacho's");

} else if (totalAmount > 25){
    console.log("Gratis Bitterballen");

} else{
    console.log("Cheap bastard");
}