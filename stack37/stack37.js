/*
Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.

let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];

function removeDuplicates(arr) {}

removeDuplicates(arr);
*/

let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];

const removeDuplicates = arr => arr = [...new Set(arr)]

console.log(removeDuplicates(arr)); 