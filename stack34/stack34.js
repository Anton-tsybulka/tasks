/*
Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

String.prototype.endsWith = function(substring) {};

str.endsWith(str1)) // false
str.endsWith(str2)) // true
*/

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

String.prototype.endsWith = function(substring) {

    let arr = this.split(' ')

    return arr[arr.length - 1] == substring

}

console.log(str.endsWith(str1))
console.log(str.endsWith(str2)) 