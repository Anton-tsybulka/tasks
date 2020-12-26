/*
Написать функцию которая проверит является ли строка палиндромом (гугли что это такое)
*/

const showIsItAPalindrome = (str) => {
    debugger;
    let checkStr = str.split(' ').join('').split('').reverse().join('').toLowerCase();
    str = str.split(' ').join('').toLowerCase();
    if (str == checkStr) {

        return `Слово/строка палиндром`;

    } else {

        return `Слово/строка не является палиндромом`;

    }
}

showIsItAPalindrome('а роза упала на лапу Азора');