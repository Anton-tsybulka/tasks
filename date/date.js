/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.
*/


let date = new Date(2012, 01, 20, 03, 12);
alert(date);


/*
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/


function getWeekDay(date) {

    let day = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',]
    return day[date.getDay()];

}

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));


/*
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/


function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;

}

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));


/*
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/


function getDateAgo(date, days) {

    let dayAgo = new Date(date);
    dayAgo.setDate(date.getDate() - days);

    return dayAgo.getDate();

}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));


/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month + 1, 0);
    return date.getDate();

}

alert(getLastDayOfMonth(2012, 1));


/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/


function getSecondsToday() {

    let today = new Date();
    let todayHoursNull = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let seconds = Math.round((today - todayHoursNull) / 1000);

    return seconds;

}
alert(getSecondsToday());


/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {

    let today = new Date();
    let tomorrowDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    let seconds = Math.round((tomorrowDay - today) / 1000);

    return seconds;

}

alert(getSecondsToTomorrow());


/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/


function formatDate(date) {

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMl = new Date() - date;             // разница между сейчас и введенной датой в миллисек. и ниже соответственно
    let diffSec = Math.round(diffMl / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);                   // вырезал два последних числа
    month = month < 10 ? '0' + mont : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`;
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`;
    } else {
        return `${day}.${month}.${year} ${hour}:${minutes}`;
    }

}

alert(formatDate(new Date(new Date - 86400 * 1000)));