/*
Написать функцию, которая возвращает сумму таким образом:
f(1)(2)(3) - 6
*/

function sum(a) {

    let currentSum = a;
  
    function f(b) {                         // не решил, а гуглил. Не знал как реализовать
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }

console.log(sum(1)(2)(3)(5)(-7))