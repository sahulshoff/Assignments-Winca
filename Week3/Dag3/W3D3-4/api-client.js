let API_KEY = `607aae2e63682455bd32d96e66008783`;

const getData = async function() {
	try {
		const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
		const res = await fetch(apiURL, { method: "GET" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};
