"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?','');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const aFilm= prompt('Один из последних просмотренных фильмов',''),
      bRate= prompt('На сколько оцените его?','');

    if (aFilm != null && bRate != null && aFilm != '' && bRate != '' && aFilm.length < 50){
        personalMovieDB.movies[aFilm] = bRate;
        console.log ('done');
    } else {
        console.log ('error');
        i--;
    }
}

if (personalMovieDB.count < 10){
    console.log ('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
 console.log ('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log ('Вы киноман');
} else {
    console.log ('Произошла ошибка');
}

console.log(personalMovieDB);