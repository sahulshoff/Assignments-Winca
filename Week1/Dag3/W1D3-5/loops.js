// OUDE STIJL LOOPS

//While loop
const colors = ['yellow','blue','red','orange'];

let i = 0;

while (i < colors.length){
    console.log(colors[i]);
    i++
}

//For loop

const colors = ['yellow','blue','red','orange'];

for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
    }

//NIEUWE STIJL LOOPS

//For each loop

const colors = ['yellow','blue','red','orange'];

colors.forEach(element => console.log(element));

// 1. 3
// 2. 1
// 3. Minder kans op Fouten want de "berekeningen" worden voor je gedaan.
//  , Beter leesbaar want er zijn aanzienlijk minder onderdelen.
// 4.  Nee hier ben je een volledig object naar de console aan het loggen

const prop = {
    name : 'lame',
    last : 'kloon',
    colour : 'brown',
    gender : 'neutral',
    street : 'downtown'
}

console.log(prop);
