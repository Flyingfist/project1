'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?","");
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("Done@");
    } else {
        console.log("Err0r");
        i--;
    }    
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибочка");
}

console.log(personalMovieDB);

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
    return num;
}

// showFirstMessage('приветики');
console.log(showFirstMessage('приветики'));

let asd = 4;

console.log(--asd);
console.log(++asd);
console.log(asd--);
console.log(asd++);


function returnNeighboringNumbers(number) {
    let arr = [--number, number, ++number];    
       return arr;
    }
console.log(returnNeighboringNumbers(4));

function getMathResult(a, b) {
    let result  = '';
    for  ( let i = 0; i < b; i++) {
        result = result + (a * (i + 1));
        if (i != (b - 1)) {
            result += '---';
        }
    }
    return result;
}
console.log(getMathResult(5, 7));