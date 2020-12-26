/*
Представьте, что вы и ваши друзья решили создать команду мечты. У этой команды должно быть крутое секретное имя, которое содержит зашифрованную информацию о ней. Например, это могут быть первые буквы имен его членов в верхнем регистре, отсортированные по алфавиту. Ваша задача - реализовать функцию createDreamTeam (members), которая возвращает имя созданной команды (строку) на основе имен ее участников (Array). Удачи!

Имена участников должны быть строками. Значения другого типа следует игнорировать. В случае неправильного типа членов функция должна возвращать false.

NB! Имя члена команды может содержать пробелы.

For example:

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'

createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
*/


const createDreamTeam = members => {
    debugger;
    members = members.filter(item => typeof item == 'string')
        .map(item => item[0])
        .sort()
        .join('');
    return members;
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));
console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));