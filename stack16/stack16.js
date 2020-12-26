/*
Напиши функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке. Все пробелы в строке должны быть сохранены.

This is an example! -> sihT si na !elpmaxe
*/

const getReverse = (str) => str.split(' ')
    .map(item => item.split('').reverse().join(''))
    .join(' ');

getReverse('This is an example!')