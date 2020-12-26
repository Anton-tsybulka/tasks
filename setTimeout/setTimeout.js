/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/


function printNumbers(from, to) {
    let number = from;

    let timeoutId = setInterval(() => {
        alert(number);
        number < to ? number++ : clearInterval(timeoutId);
    }, 1000)

}



function printNumbersTimeout(from, to) {
    let number = from;

    setTimeout(function interval() {
        alert(number);
        if (number < to) {
            setTimeout(interval, 1000);
        }
        number++;
    }, 1000);

}