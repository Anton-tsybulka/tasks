/*
Дан массив слов, необходимо определить, составалены ли все слова из одних и тех же символов.
*/

const compares = arr => {

    let answer = arr.slice()
        .map(item => item.split('')
            .sort()
            .join(''))

    let basic = answer[0]

    return answer.every(item => item == basic)

}

console.log(compares(['кот', 'ток', 'кто']))
console.log(compares(['кот', 'Ток', 'кто']))