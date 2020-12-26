/*
Такая вот задача.
Удалить из одного массива все элементы второго массива.
arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const arrayDiff = (arr1, arr2) => {
    
    let del = arr1.filter(item => !arr2.includes(item));

    return del;
}

console.log(arrayDiff([1, 2, 2, 2, 3, 4, 5, 6, 7], [2, 1, 3]))