/*
Simple, учитывая строку слов, возвращает длину самого короткого слова.
Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
*/

/* function getSortArr(arr) {

    return arr.sort((a, b) => a.length - b.length);
    
}

function simple(str, func) {
debugger;
    let arrFromStr = str.split(' ');
    func(arrFromStr);

    return alert(`Самое короткое слово: ${arrFromStr[0]} = ${arrFromStr[0].length} букв(а).`);

}

simple('Наверное как-то так возможно, а может и нет', getSortArr); */

const simple = str => {

    str = str.split(' ')
        .map(item => item.length)
        .sort((a, b) => a - b)

    return str[0]

}

console.log(simple('Наверное как-то так возможно, а может и нет'));