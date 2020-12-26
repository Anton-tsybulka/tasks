/*
Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

function unique_letters(str) {};

unique_letters('anaconda')
*/

const unique_letters = str => {
    
    str = str.split('')
    let showStr = [...new Set(str)].join('')

    return showStr
}

console.log(unique_letters('anaconda')) 