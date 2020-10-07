"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?','');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const aFilm= prompt('Один из последних просмотренных фильмов',''),
      bRate= prompt('На сколько оцените его?',''),
      cFilm= prompt('Один из последних просмотренных фильмов',''),
      dRate= prompt('На сколько оцените его?','');

personalMovieDB.movies[aFilm] = bRate;
personalMovieDB.movies[cFilm] = dRate;

console.log(personalMovieDB);