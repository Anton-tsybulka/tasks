/*
На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами от a до m.

Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» управляющая строка будет aaabbbbhaijjjm, что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a ...

Иногда возникают проблемы: возникает недостаток цветов, техническая неисправность и «плохая» контрольная строка, например aaaxbbbbyyhwawiwjjjwwm с письмами не от а до м.

Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде строки, представляющей рациональное число, числитель которого равен числу ошибок, а знаменатель - длине управляющей строки. Не уменьшайте эту дробь до более простого выражения.

Строка имеет длину, большую или равную единице, и содержит только буквы от a до z.
*/


const printer_error = (str) => {
    debugger;
    let basicStr = 'abcdefghijklm'.split('');
    let strNew = str.split('').sort((a) => a.includes(basicStr));

    return strNew;

}

printer_error('abqzwer');