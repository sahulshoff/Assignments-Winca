const favMovie = {
    title= "pulp fiction",
    duration = 180,
    stars = ['John Travolta','Samuel L. Jackson','Quentin Tarantino']
}


const printMovie = function(movie) {
console.log(movie.title + " lasts for " + movie.duration + " minutes");
console.log("It stars: " + movie.stars.join(", "));
};

printMovie(myFavMovie);