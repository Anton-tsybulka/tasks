/*
Тролли атакуют ваш раздел комментариев!
Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.
Например, строка «Этот сайт для неудачников LOL!» стал бы "Ths wbst s fr lsrs LL!"
у не считается гласным.
*/

/*
let vowelArray = ['A','a','E','e','Y','y','I','i','O','o','U','u','J','j','Я','я','Ы','ы', 'А','а','Е','е','И','и','О','о','Ю','ю','Э','э'];
let newStr;
let total;

const changesStrInArr = (str) => {
    debugger;
    return newStr = str.split('');

}

function removesVowels(mutableArray, base) {

    for (let i = 0; i < mutableArray.length; i++) {
        
        for (let j = 0; j < base.length; j++) {
            
            if (mutableArray[i] == base[j]) {

                mutableArray.splice(i, 1);
                i--;
                break;

            }
                        
        }
        
    }
    
    return total = mutableArray.join('');
    
}

changesStrInArr('Этот сайт для неудачников LOL!');
removesVowels(newStr, vowelArray);
alert(total);
*/

// второй метод

const removesVowels = str => {
    debugger
    let vowelArray = ['A', 'a', 'E', 'e', 'Y', 'y', 'I', 'i', 'O', 'o', 'U', 'u', 'J', 'j', 'Я', 'я', 'Ы', 'ы', 'А', 'а', 'Е', 'е', 'И', 'и', 'О', 'о', 'Ю', 'ю', 'Э', 'э']

    str = str.split('')
        .filter(item => !vowelArray.includes(item))
        .join('')

    return str

}

console.log(removesVowels('Этот сайт для неудачников LOL!'));