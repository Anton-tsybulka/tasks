/*
В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вы должны вернуть самое высокое и самое низкое число.

list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"

*/


const showMaxMin = str => {
    debugger
    str = str.split(' ')
        .sort((a, b) => a - b)

    let show = `max = ${str[str.length - 1]}, min = ${str[0]}`

    return show

}

console.log(showMaxMin('4 5 29 54 4 0 -123 666 -64 1 -3 6 -6'))