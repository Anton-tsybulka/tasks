/*
Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

Если функции передана правильная строка PIN, верните true, иначе верните false.
*/


/* let getPin = prompt('Задайте pin. Должен содержать 4 или 6 цифр!');
let ask = prompt('Введите свой pin?');


function getAnswer(pin, answer) {
    debugger;

    if (pin.length == 4 || pin.length == 6) {

        return +pin == +answer ? true : false;

    } else {

        return alert('Неверно задан pin. Должен содержать 4 или 6 цифр!');

    }

}

getAnswer(getPin, ask); */


let pin = '1234'
let pin2 = '123456'
let pin3 = '12345'
let pin4 = '12sf'

const getAnswer = (str) => {
    
    return (str.length == 4 || str.length == 6) && isFinite(str) ? true : false

}

console.log(getAnswer(pin));
console.log(getAnswer(pin2));
console.log(getAnswer(pin3));
console.log(getAnswer(pin4));