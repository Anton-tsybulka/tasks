/*
Найти факториал 5
*/

const getFactorial = number => {
    
    if (number == 1) {
        return number;
    } else {
        return number + getFactorial(number - 1);
    }

}

console.log(getFactorial(5));