const findNeedle = function(words) {
	const needle = element => element == "needle";
	return words.findIndex(needle);
};

module.exports = findNeedle;
