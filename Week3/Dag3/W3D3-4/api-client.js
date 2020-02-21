let API_KEY = `607aae2e63682455bd32d96e66008783`;

movieId = "49051";

const getGenreData = async function() {
	try {
		const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
		const res = await fetch(apiURL, { method: "GET" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};

const getSingleMovie = async function() {
	try {
		const apiTitle = `https://api.themoviedb.org/3/find/${external_id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
		const res = await fetch(apiTitle, { method: "GET" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};

const getLatestMovies = async function() {
	try {
		const apiTopTen = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
		const res = await fetch(apiTopTen, { method: "GET" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};

const getActionMovies = async function() {
	try {
		const apiAction = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
		const res = await fetch(apiAction, { method: "GET" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};

const getMoviesSeventyFive = async function() {
	try {
		const apiMovie75 = `https://api.themoviedb.org/3/discover/movie?primary_release_year=1975&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
		const res = await fetch(apiMovie75, { method: "GET" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};

const getPostrating = async function() {
	try {
		const apiPost = `https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=${API_KEY}`;
		const res = await fetch(apiPost, { method: "POST", body: "value: 8.5" });
		const jsonData = await res.json();
		return jsonData;
	} catch (err) {
		console.log("Error");
	}
};
