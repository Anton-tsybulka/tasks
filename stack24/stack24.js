/*
Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ строки в указанной позиции. Если в верхнем регистре выводится – true, если в нижнем – false.

function isUpperCase(str, character) {};

isUpperCase('tasks JavaScript', 6); // true
*/

const isUpperCase = (str, character) => {
    
    let basicStr = 'qazwsxedcrfvtgbyhnujmikolpйфяцычувскамепинртгоьшлбщдюзжхэъ'
    str = str.split('')[character]
    basicStr = basicStr.split('').find(item => item == str)

    return str ==  basicStr

}

console.log(isUpperCase('RjkJHh', 1));