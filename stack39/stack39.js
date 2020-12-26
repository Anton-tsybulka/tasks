/*
Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

let arr1 = [1, [2,[3,[4]]]];

let arr2 = [1, [2], [3, [[4]]],[5,6]];

function expand(arr) {}

expand(arr1); // 1,2,3,4
expand(arr2); // 1,2,3,4,5,6
*/

let arr1 = [1, [2,[3,[4]]]];

let arr2 = [1, [2], [3, [[4]]],[5,6]];

const expand = arr => arr.flat(Infinity)

console.log(expand(arr1)); 
console.log(expand(arr2))