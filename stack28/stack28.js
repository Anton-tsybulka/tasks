/*
Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

let str = "вишня, груша, слива, груша";

function removeDuplicate(str) {};

removeDuplicate(str)
*/

let str = "вишня, груша, слива, груша, яблоко, апельсин, яблоко, ананас, ананас"

const removeDuplicate = str => {

    str = str.split(', ')
    let showStr = [...new Set(str)].join(', ')

    return showStr

}

console.log(removeDuplicate(str))