/*Вы можете знать несколько довольно больших идеальных квадратов. Но как насчет следующего?
Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после того, как передан в качестве параметра. Напомним, что целочисленный совершенный квадрат - это такое целое число n, что sqrt (n) также является целым числом.
Если параметр сам по себе не является идеальным квадратом, то должно быть возвращено -1. Вы можете предположить, что параметр положительный.
*/

const findNextSquare = (sq) => {

    let num = (Math.sqrt(sq) + '').includes('.');

    if (num) {

        return -1;

    } else {

        return Math.pow((Math.sqrt(sq) + 1), 2);
    }

}

alert(findNextSquare(121));