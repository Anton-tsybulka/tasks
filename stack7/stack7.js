/*
Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Малыш каратэ» (2010) и «После Земли» (2013). Джейден также известен своей философией, которую он передает через Twitter. Когда он пишет в Твиттере, он известен почти всегда заглавными буквами каждого слова. Для простоты вам придется использовать каждое слово с заглавной буквы, посмотрите, как ожидаются сокращения в приведенном ниже примере.

Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются реальными цитатами из Jaden Smith, но они не пишутся с большой буквы так же, как он их первоначально напечатал.
*/


/* function showString(str) {
    debugger;
    let arrFromStr = str.split(' ');
    let transforArr = [];
    let showStr;

    function createWords(arr) {

        let letter;
        let word;

        for (let i = 0; i < arr.length; i++) {

            letter = arr[i][0].toUpperCase();
            word = letter + arr[i].slice(1);
            transforArr.push(word);

        }

        return transforArr;

    }

    showStr = createWords(arrFromStr).join(' ');
    return alert(showStr);

}

showString('как бы вроде наверное так...'); */


/* const showString = str => {
    debugger
    str = str.split(' ')
        .map(item => item[0].toUpperCase() + item.slice(1))
        .join(' ')

    return str

}

console.log(showString('как бы вроде наверное так...')); */

String.prototype.toJadenCase = function () {

    return this.split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(' ')
    
}

console.log('как бы вроде наверное так...'.toJadenCase()); 