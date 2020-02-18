const num = 40;

const testNum = new Promise((resolve, reject) => {
	if (num > 10) {
		const bigValue = "Het nummer is groter dan 10";

		resolve(bigValue);
	} else {
		const lowValue = new Error("Het numme is kleiner dan 10");
		reject(lowValue);
	}
});

console.log(testNum);



 

const makeAllCaps = (arrayOfWords) => {

   if (arrayOfWords.every((words) => {
       word === 'string'
   })

};  
const sortWords = () => {};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

