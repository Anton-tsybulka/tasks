/*
Твоя задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате.

Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (не 0)

Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только действительные последовательные числа

is2 Thi1s T4est 3a -> Thi1s is2 3a T4est
*/

const getSortStr = (str) => {
    debugger;
    return str = str.split(' ').sort((a, b) => a.split('').find(item => isFinite(item)) - b.split('').find(item => isFinite(item))).join(' ');
        
}

getSortStr('is2 Thi1s T4est 3a')