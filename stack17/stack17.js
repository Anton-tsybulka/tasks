/*
Написать функцию которая переделывает строку с camelCase в snake_case

solution("redevCourses") -> "redev_courses"
*/

const solution = (str) => {
    debugger;
    let strBasic = 'QAZWSXEDCRFVTGBYHNUJMIKOLP';

    let letterIndex = str.split('')
        .findIndex(item => strBasic.includes(item));

    let letterPush = strBasic.split('')
        .find(item => str.includes(item));
    letterPush = letterPush.toLowerCase();

    str = str.split('');
    str.splice(letterIndex, 1, '_', letterPush);

    return str.join('');

}

solution("redevCourses");