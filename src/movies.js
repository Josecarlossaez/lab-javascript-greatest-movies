// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let AllDirectors = moviesArray.map((eachMovie, index) => {
    return eachMovie.director;
  });
  return AllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;
  let howManyFilms = moviesArray.filter((eachMovie) => {
    if (
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
    ) {
      counter = counter + 1;
    }
  });

  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let allScore = moviesArray.reduce((acc, eachScore) => {
    if (eachScore.score === undefined) {
      return acc;
    } else {
      let num = Number(eachScore.score);
      return acc + num;
    }
  }, 0);

  let average = allScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaFilms = moviesArray.filter((eachMovie) => {
    return eachMovie.genre.includes("Drama");
  });
  let mediaFilms = scoresAverage(dramaFilms);
  return mediaFilms;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneArray = structuredClone(moviesArray);
  let filmOrder = cloneArray.sort((movie2, movie1) => {
    if (movie2.year > movie1.year) {
      return 1;
    } else if (movie2.year < movie1.year) {
      return -1;
    } else {
      return 0;
    }
  });

  return filmOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    let cloneArray2 = structuredClone(moviesArray);
    let titleOut = cloneArray2.map((eachMovie, number) => {
        return eachMovie.title

    })
    let alphaFilm = titleOut.sort ((movie2, movie1) =>{
        if (movie2.title > movie1.title) {
            return 1;
          } else if (movie2.title < movie1.title) {
            return -1;
          } else {
            return 0
          }
  
    })
    return alphaFilm.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
