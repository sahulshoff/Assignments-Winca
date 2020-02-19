// const addNum = (...num) => {
// 	return num.reduce(function(prev, current) {
// 		return prev + current;
// 	});
// };

// console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const addNum = (num1, num2, num3) => {
	return num1 + num2 + num3;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(addNum(...numbers));
