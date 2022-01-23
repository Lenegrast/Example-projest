"use strict";

let numverOfFilms = prompt("Сколько фильмов вы уже посмотрели?", );

let personalMovieDB = {
    count: numverOfFilms,
    movies: {},
    actorns: {},
    genres: [],
    print: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Сколько фильмов вы уже посмотрели?", ),
      d = prompt("На сколько оцените его?", "");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
