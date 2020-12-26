/*
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
Например:

function unique(arr) {
   ваш код 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

P.S. Здесь мы используем строки, но значения могут быть любого типа.
P.P.S. Используйте Set для хранения уникальных значений.
*/


function unique(arr) {

  let set = new Set(arr);
  let array = [];

  set.forEach(element => {
    array.push(element);
  });

  return array;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));


/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/


function aclean(arr) {

  let map = new Map();
  let array = [];

  for (const iterator of arr) {
    let singleWord = iterator.toLowerCase().split("").sort().join("");
    map.set(singleWord, iterator);
  }

  for (const word of map.values()) {
    array.push(word);
  }

  return array;

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));


/*
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/


let map = new Map();
map.set("name", "John");

function makeAnArray(arr) {

  let newArr = [];
  
  for (const iterator of arr.keys()) {
    newArr.push(iterator);
  }

  return newArr;

}

let keys = makeAnArray(map);
keys.push("more");
