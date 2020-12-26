/*
Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

let str = " Pasha is a good boy "

function strip(str) {};

strip(str)
*/

let str = " Pasha is a good boy "

const strip = str => str.trim();

console.log(strip(str))