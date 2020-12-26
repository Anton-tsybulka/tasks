/*
Задание 2

Реализовать арифметику в функциональном стиле. Написать функции для простейших операций с двумя числами add, sub, mul, div (сложить, вычесть, умножить, разделить), так что
Если их вызвать с двумя аргументами, возвращается результат операции
let a = add(1,2); // 3

let b = mul(a, 10); // 30

Если их вызвать с одним аргументом (arg1), возвращается функция, которая совершает данную операцию со своим аргументом (arg2) и аргументом первой функции (arg1)
let sub1 = sub(1); // sub1 отнимает от любого числа единицу
let c = sub1(b); // 29

let d = mul(sub(a,1))(c); // 58

Написать универсальный метод pipe, принимающий любое число параметров, реализующий последовательность арифметических операций с данным числом.
let doSmth = pipe(add(d), sub(c), mul(b), div(a)); // функция, последовательно выполняющая эти операции.
let result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290

let x = pipe(add(1), mul(2))(3); // 8
Выполнить проверку написанных методов.
*/

const add = (arg1, arg2) => {

    if (arg2 === undefined) return (arg3) => arg3 + arg1;

    return arg1 + arg2;
}

const sub = (arg1, arg2) => {

    if (arg2 === undefined) return (arg3) => arg3 - arg1;

    return arg1 - arg2;
}

const mul = (arg1, arg2) => {

    if (arg2 === undefined) return (arg3) => arg3 * arg1;

    return arg1 * arg2;
}

const div = (arg1, arg2) => {

    if (arg2 === undefined) return (arg3) => arg3 / arg1;

    return arg1 / arg2;
}

const pipe = (...args) => {
    debugger;
    const func = (param) => {

        let emptyArr = param;
        args.forEach((item) => (emptyArr = item(emptyArr)));

        return emptyArr

    };

    return func;

};

let a = add(1, 2);
let b = mul(a, 10);
let sub1 = sub(1);
let c = sub1(b);
let d = mul(sub(a, 1))(c);
let doSmth = pipe(add(d), sub(c), mul(b), div(a));
let result = doSmth(0);
let x = pipe(add(1), mul(2))(3);
