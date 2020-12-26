/*
Функция принимает число n (n> 0), чтобы вернуть обратную последовательность от n до 1

Например n = 5 на выходе у тебя должно быть 5,4,3,2,1
*/


const getResult = (n) => {

    let arr = []
    let index = n

    for (let i = 0; i < n; i++) {

        arr.push(index--);

    }

    return arr

}

console.log(getResult(5));