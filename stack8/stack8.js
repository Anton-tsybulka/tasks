/*
Напишите функцию, которая возвращает минимальное и максимальное количество заданного массива.
*/


let arrayNumber = [1234, 343, 134, 41, 98235, 2];

function showMinMax(arr) {

    arr.sort((a, b) => a - b)
    
    let show = `Min: ${arr[0]}; Max: ${arr[arr.length - 1]}`

    return show

}

console.log(showMinMax(arrayNumber)); 
