
// Oefening Deel A

//dutchSandwich
// bread
// cheese
// lettuce
// mustard
// bread

// const dutchSandwich = function(){
// console.log("bread");
// console.log("cheese");
// console.log("lettuce");
// console.log("mustard");
// console.log("bread");
// }

// dutchSandwich()

// Oefening Deel B

// const makeSandwich = function(topping)/*declarate function*/{
//     console.log("There you go, a sandwich with" + " " + topping);
    
//     }
  
// makeSandwich("Beef"); // call function
// makeSandwich("Salami");

// Oefening deel C

const calculateDiscountedPrice = function(totalAmount,discount){
    return Math.round(totalAmount-discount);

}

console.log(calculateDiscountedPrice(100,20));

//Oefening deel D

const approveDiscount = function(totalAmount,discount){

    if (totalAmount > 25) {
    return Math.round(totalAmount-discount);
    }
    else {
         return totalAmount;
        }
}

console.log(approveDiscount(20,2.5));
