/*
Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

function alphabetize(str) {};

alphabetize("Europe")
*/

const alphabetize = str => {

    return str.split('').sort().join('')

}

console.log(alphabetize("Europe"))