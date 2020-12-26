/*
Преобразовать массив
Ваша задача - реализовать функцию transform(arr), которая принимает массив и возвращает преобразованный массив на основе управляющих последовательностей, содержащихся в arr. Управляющие последовательности - это определенные строковые элементы указанного массива:

--discard-next исключает следующий элемент массива из преобразованного массива.
--discard-prev исключает предыдущий элемент массива из преобразованного массива.
--double-next удваивает следующий элемент массива в преобразованном массиве.
--double-prev удваивает предыдущий элемент массива в преобразованном массиве.
Например:

transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]

transform ([1, 3, '--discard-prev', 4]) => [1, 4]
*/

const transform = arr => {
    debugger
    let serarshArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
    let searsh = arr.find(item => serarshArr.includes(item))
    let item = arr.indexOf(searsh)

    switch (searsh) {
        case '--discard-next':

            arr.splice(item, 2)
            break;

        case '--discard-prev':

            arr.splice(item - 1, 2)
            break;

        case '--double-next':

            arr.splice(item, 1, arr[item + 1])
            break;

        case '--double-prev':

            arr.splice(item, 1, arr[item - 1])
            break;

    }

    return arr

}

console.log(transform([1, 3, '--discard-next', 4, 5]));
console.log(transform([1, 3, '--discard-prev', 4, 5]));
console.log(transform([1, 3, '--double-next', 4, 5]));
console.log(transform([1, 3, '--double-prev', 4, 5]));
