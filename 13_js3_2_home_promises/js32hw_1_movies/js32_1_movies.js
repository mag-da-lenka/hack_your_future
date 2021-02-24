console.log(`\nhomework js3-2 ex.1 MOVIES by sq.mag\n `)


/*
This exercise is repetition of array functions. 
You dont have to use chaining or anything fancy. 
Just fetch the movies and use the correct array function to get the following movies:
Fetch movies from this api: 
https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json
Create an array of bad movies.
Create an array of bad movies since year 2000.
*/

const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
fetch(moviesUrl)

    .then(response => response.json())

    .then(data_movies => {

        console.log(`Fetch check: data_movies`, data_movies) // works

        const badMovies = data_movies
            .filter(aBadMovie => aBadMovie.rating < 3)
            .map(aBadMovie => aBadMovie.title);
        console.log(`Bad movies by titles:`, badMovies);

        const badMoviesSince2000 = badMovies
            .filter(aBadMovie2000Up => (aBadMovie2000Up.year >= 2000))
            .map(aBadMovie2000Up => aBadMovie2000Up.title)
        console.log(`Bad movies since 2000 by titles: `, badMoviesSince2000);

    })

//