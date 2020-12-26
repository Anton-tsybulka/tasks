/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/


function changeArray(array, element) {

    return array[Math.floor(array.length / 2)] = element;

}// код для поиска и замены среднего элемента

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
console.log(styles);

changeArray(styles, 'Классика');
console.log(styles);

alert(styles.shift());
console.log(styles);

styles.unshift('Рэп', 'Рэгги');
console.log(styles);


/*
Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {

    let arr = [];

    while (true) {

        let elementNumbers = prompt("Введите значение", 0);

        if (elementNumbers === "" || elementNumbers === null || !isFinite(elementNumbers)) { // если ввели пустую строку или нажали отмену (отмена = null) или не число

            break;                                                                           // выходим из цикла

        }

        arr.push(+elementNumbers);
    }

    let element = 0;

    for (let i = 0; i < arr.length; i++) {

        element += arr[i];

    }

    return element;

}

alert(sumInput());


/*
1)Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

2)С помощью массива arr из предыдущего номера выведите в консоль содержимое первого, второго и третьего элементов.

3)Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

4)Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
Результаты сложите, присвойте переменной result. Выведите в консоль значение этой переменной.
*/

let arr = ['a', 'b', 'c'];
alert(arr);                 //1

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);        //2

arr.push('d');
let strLog = `'` + arr[0] + ' + ' + arr[1] + ', ' + arr[2] + ' + ' + arr[3] + `'`;
alert(strLog);              //3

let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);        //4