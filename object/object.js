/*
1)Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
var obj = {a: 1, b: 2, c: 3};

2)Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
var obj = {Коля: '1000', Вася: '500', Петя: '200'};

3)Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). 
Выведите в консоль текущий день недели.

4)Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
*/

const numberObj = {

    a: 1,
    b: 2,
    c: 3

}

alert(numberObj["c"]); // способ через квадратные скобки
alert(numberObj.c); // способ точечной нотации


const salaryObj = {

    Коля: '1000',
    Вася: '500',
    Петя: '200'

}

alert("Зарплата Коли " + salaryObj.Коля);
alert("Зарплата Пети " + salaryObj['Петя']);


const dayWeek = {

    "1": 'Monday',
    "2": 'Tuesday',
    "3": 'Wednesday',
    "4": 'Thursday',
    "5": 'Friday',
    "6": 'Saturday',
    "7": 'Sunday'

}

console.log(dayWeek["7"]);
console.log(dayWeek["1"]);


let dayMonday = '1';
let dayTuesday = '2';
let dayWednesday = '3';
let dayThursday = '4';
let dayFriday = '5';
let daySaturday = '6';
let daySunday = '7';

console.log(dayWeek[dayMonday]);
console.log(dayWeek[daySaturday]);


/*
Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/


const user = {};

user.name = 'John';
user["surname"] = 'Smith';
user["name"] = 'Pete';

console.log(user.name);

delete user.name;

console.log(user);


/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/


function isEmpty(checkObj) {

    for (let key in checkObj) {

        return false;

    }

    return true;

}


/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {

    sum += salaries[key];

}

alert(sum);


/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
*/


function multiplyNumeric(changeObj) {

    for (let key in changeObj) {

        if (typeof (changeObj[key]) == 'number') {

            changeObj[key] *= 2;

        } else {

            changeObj[key];

        }
    }

    return changeObj;

}
