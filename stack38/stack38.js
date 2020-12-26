/*
Напишите функцию с двумя параметрами, которая создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

let array1 = [1, 2, 3, 4, 5];

let array2 = [4, 5, 6];

function func(arr1,arr2){}

func(array1,array2) // [5,7,9,4,5]
*/

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6];

const func = (arr1, arr2) => {

    let arrMax;
    let arrMin;

    if (arr1.length >= arr2.length) {
        arrMax = arr1
        arrMin = arr2
    } else {
        arrMax = arr2
        arrMin = arr1
    }
    
    let arrNew = arrMax.map((item, index) => index > (arrMin.length - 1) ? item : item + arrMin[index])

    return arrNew

}

console.log(func(array1, array2)) 