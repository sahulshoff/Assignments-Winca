function huisWerkMaken(vak, callback) {
	console.log(`Oke, oke ik ga nu mijn ${vak} huiswerk maken`);
	setTimeout(() => {
		callback();
	}, 10000);
}

//huisWerkMaken();

function klaarMetHuiswerk() {
	console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk");
}

huisWerkMaken("wiskunde", klaarMetHuiswerk);
