"use strict";
let numberOfFilms = prompt('Сколько фильмов вы просмотрели?','');
console.log(numberOfFilms);

let personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: '',
    genres: [],
    privat: false
};

let oneOfLastFilms= prompt('Один из последних просмотренных фильмов',''),
    howGoodWasFilm= prompt('На сколько оцените его?','');
personalMovieDB.movies= {
    oneOfLastFilms, howGoodWasFilm};

console.log(personalMovieDB.movies);