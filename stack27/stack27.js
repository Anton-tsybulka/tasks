/*
Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.

let str = 'abc def def lom abc abc def';

function replaceAll(find, replace, str) {};

replaceAll('abc', 'x', str)
*/

let str = 'abc def def lom abc abc def'

const replaceAll = (find, replace, str) => {    

    return str.split(' ').map(item => item == find ? replace : item).join(' ')

};

console.log(replaceAll('abc', 'sss', str))