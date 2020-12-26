/*
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||
*/


function checkAge(age) {

  return age > 18 ? true : confirm('Родители разрешили?');

}


function checkAge(age) {

  return age > 18 || confirm('Родители разрешили?');

}


/*
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/


function min(a, b) {
  return a < b ? a : b;
}


/*
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
*/


function pow(x, n) {

  let multiplay = x;

  for (let i = 1; i < n; i++) {
    multiplay *= x;
  }

  return console.log(multiplay);
}


/*
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);