/*
Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

function colonOdd (num) {}

colonOdd(55639217)
*/

/* const colonOdd = num => {

    let strNew = String(num).split('')
    let arr = []

    for (let i = 0; i < strNew.length; i++) {
        if ((+strNew[i]%2 == +strNew[i+1]%2) && (+strNew[i]%2 != 0)) {
            arr.push(strNew[i] + ':')
        } else {
            arr.push(strNew[i])
        }
        
    }

    return arr.join('')

}

console.log(colonOdd(556639217))  */

const colonOdd = num => {

    let strNew = String(num).split('')
    let arr = [...strNew].map((item, index) => (+item%2 == strNew[index+1]%2) && (+item%2 != 0) ? item + ':' : item ).join('')

    return arr

}

console.log(colonOdd(556639217)) 