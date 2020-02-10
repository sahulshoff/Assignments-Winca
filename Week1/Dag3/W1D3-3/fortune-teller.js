const tellFortune = function(numChild,partnerName,geo,job){
    let toBe = ("You will be a " + job + " in " + geo + ", " + "and married to " 
    + partnerName + " with " + numChild + " kids.");
    console.log(toBe);
}

tellFortune(5,"Mary","London","Plumber");
tellFortune(6,"Daphne","Verona","Chef");
tellFortune(9,"Sarah","Spain","Trucker");