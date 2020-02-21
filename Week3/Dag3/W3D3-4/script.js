const setGenreData = async () => {
	const genreList = document.getElementById("listGenre");
	const data = await getGenreData();

	data.genres.forEach(genre => {
		const li = document.createElement("li");
		const liGenre = `genre: ${genre.name}, id: ${genre.id}`;
		const textnode = document.createTextNode(liGenre);

		li.appendChild(textnode);
		genreList.appendChild(li);
	});
};
setGenreData();

external_id = "tt0903624";

const setSingleMovie = async () => {
	const data = await getSingleMovie();
	const movieData = data.movie_results[0];
	const movieH1 = document.getElementById("singleMov");
	const textnode = document.createTextNode(movieData.original_title);
	movieH1.appendChild(textnode);
};

setSingleMovie();

const setLatestMovies = async () => {
	const movieLatest = document.getElementById("listLatest");
	const latestMoviedata = await getLatestMovies();
	//console.log(data);
	const languageFilter = latestMoviedata.results.filter(
		array => array.original_language === "en"
	);
	const movieDataEn = languageFilter.slice(0, 10);
	//console.log(movieData);

	movieDataEn.forEach(titel => {
		const li = document.createElement("li");
		const textnode = document.createTextNode(titel.original_title);

		li.appendChild(textnode);
		movieLatest.appendChild(li);
	});
};

setLatestMovies();

const setActionMovies = async () => {
	const movieAction = document.getElementById("actionList");
	const actionMoviedata = await getActionMovies();
	//console.log(data);
	const languageFilter = actionMoviedata.results.filter(
		array => array.original_language === "en"
	);
	const movieDataEn = languageFilter.slice(0, 10);
	//console.log(movieData);

	movieDataEn.forEach(titel => {
		const li = document.createElement("li");
		const textnode = document.createTextNode(titel.original_title);

		li.appendChild(textnode);
		movieAction.appendChild(li);
	});
};

setActionMovies();

const setMoviesSeventyFive = async () => {
	const selectMovieList = document.getElementById("movieListSeventy");
	const movieDataSeventyFive = await getMoviesSeventyFive();
	//console.log(data);
	const languageFilter = movieDataSeventyFive.results.filter(
		array => array.original_language === "en"
	);
	const movieDataFilteredEn = languageFilter.slice(0, 10);
	//console.log(movieData);

	movieDataFilteredEn.forEach(title => {
		const li = document.createElement("li");
		//const liMovieData = ;
		const textnode = document.createTextNode(
			//title.original_title,
			//title.release_date
			` ${title.original_title}, Release Date: ${title.release_date}`
		);

		li.appendChild(textnode);
		selectMovieList.appendChild(li);
	});
};

setMoviesSeventyFive();

const setPostRating = async () => {
	const rating = await getPostrating();
};

setPostRating();
