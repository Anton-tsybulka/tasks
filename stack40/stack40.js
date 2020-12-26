/*
Напишите функцию, которая находит наиболее часто используемый элемент массива.

let array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

function func(arr){}

func(array)
*/

let array = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

const func = arr => {
    debugger
    let arrNew = [...new Set(arr)]
    let arrQuantityItem = arrNew.map(item => arr.filter(item1 => item == item1).length) // в массив передаю количество совпадений
    let indexMax = arrQuantityItem.slice()
        .sort((a, b) => b - a)                                                          // в порядке убывания длина массивов
    let index = arrQuantityItem.indexOf(indexMax[0])                                    // индекс наиболее часто используемого элемента

    return arrNew[index]

}

console.log(func(array))