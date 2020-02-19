const callData = async () => {
	const waitForData = await getData();
	console.log("Tadaaaa the data", waitForData);
};

callData();
