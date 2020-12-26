/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/


function numberInput() {

    let firstNumber = prompt("Введите первое число"); // можно +prompt
    let secondNumber = prompt("Введите второе число");

    let summ = parseFloat(firstNumber) + parseFloat(secondNumber);

    alert(summ);

}