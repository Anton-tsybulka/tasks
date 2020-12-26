/*
Напишите функцию capitalizeFirstLetter(str), которая преобразоввывает первый символ строки в нижний регистр.

let str="Пример строки";

function capitalizeFirstLetter(str) {};

capitalizeFirstLetter(str)
*/

const capitalizeFirstLetter = str => {
    
    let letter = str.split('')
        .splice(0, 1)
        .join('')
        .toLowerCase()

    let showString = str.split('')
    showString.splice(0, 1, letter)    

    return showString = showString.join('')

}

console.log(capitalizeFirstLetter("Пример строки"));