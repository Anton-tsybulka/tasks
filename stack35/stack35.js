/*
Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.

let vegetables = ['Капуста', 'Репа', 'Редиска'];

function arrayClone(arr) {}
*/

let vegetables = ['Капуста', 'Репа', 'Редиска'];

const arrayClone = arr => {

    let arrNew = arr.slice()

    return arrNew

}

let a = arrayClone(vegetables)

console.log(vegetables == vegetables)
console.log(vegetables == a)


