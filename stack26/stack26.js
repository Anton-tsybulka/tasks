/*
Создайте метод объекта String startsWith(), который определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.

let str = 'abc def ghi jkl mno pqr stu';

String.prototype.startsWith = function(start) {};

str.startsWith('abc')
*/

let str = 'abc def ghi jkl mno pqr stu'

String.prototype.startsWith = function (start) {

    return start == this.split(' ')[0]

};

console.log(str.startsWith('abc'))