test("Should be null", () => {
	// Begin met expect()
	// Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn.
	// Daarna volgt je .toBeSomethingSomething functie,
	// zoek de geschikte functie in de documentatie.
	// In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk
	// Null returned. Dus "toBeNull()" makes the most sense.
	expect(functions.isNull()).toBeNull();
});

test("checkValue falsy when argument is undefined", () => {
	expect(functions.checkValue()).toBe();
});

test("User should be Brad Traversy object", () => {
	expect(functions.createUser()).toEqual({
		firstName: "Brad",
		lastName: "Traversy"
	});
});

const functions = require("./functions.js");
