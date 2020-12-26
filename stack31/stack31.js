/*
Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

let str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {};

cutString(str, 5)
*/

let str = "Сила тяжести приложена к центру масс тела"

const cutString = (str, n) => {

    str = str.split(' ').splice(0, n)

    return str.join(' ')
}

console.log(cutString(str, 5))