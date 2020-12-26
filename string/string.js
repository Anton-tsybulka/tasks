/*
1)Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.

2) Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.

3) Создайте переменную name и присвойте ей ваше имя. Выведи в консоль фразу 'Привет, %Имя%!'.

4)Создайте переменную age и присвойте ей ваш возраст. Выведи в консоль 'Мне %Возраст% лет!'.
*/


let str = 'Привет, Мир!';
console.log(str); // 1

let str1 = 'Привет, ';
let str2 = 'Мир!';
console.log(str1 + str2); // 2


let name = 'Anton';
console.log(`Привет, ${name}!`); // 3


let age = 31;
console.log(`Мне ${age} лет!`); // 4


/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
*/

function ucFirst(str) {

    let readyString = str.slice(0, 1).toUpperCase() + str.slice(1);

    return readyString;

}


/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/


function checkSpam(str) {

    let strLowerCase = str.toLowerCase();

    return strLowerCase.includes('viagra') || strLowerCase.includes('xxx');

}


/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/


function truncate(str, maxLength) {

    if (str.length == maxLength) {
        return str;
    } else {
        let addPoints = '...';
        return str.slice(0, (maxLength - 3)) + addPoints;
    }

}


/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/


function extractCurrencyValue(str) {

    let number = str.slice(1);

    return +number;

}