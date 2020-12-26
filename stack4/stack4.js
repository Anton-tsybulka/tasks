/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

/*
function accum([...str]) {
    debugger;
    let arrayString = str;
    let getNewArr = [];
    let show;

    function createString(arr) {

        for (let i = 0; i < arr.length; i++) {

            getNewArr.push(arr[i].toUpperCase());

            for (let j = 1; j < getNewArr.length; j++) {

                getNewArr[i] = getNewArr[i] + arr[i].toLowerCase();

            }

        }

        return show = getNewArr.join('-');

    }

    createString(arrayString);
    alert(show);

}

accum('asdff');
*/

const accum = str => {
    debugger
    str = str.toLowerCase()
        .split('')
        .map((item, index) => item.toUpperCase() + item.repeat(index))
        .join('-')

    return str
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));