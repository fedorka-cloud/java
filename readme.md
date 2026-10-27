//
//
//
// const correctPassword = 'javascript123'
//
// function checkPassword(password) {
//     if (password === correctPassword) {
//         return true
//     } else {
//         return false
//     }
// }
//
// let attepts = 3
// let passwordLabel = ''
//
// while (checkPassword(passwordLabel) === false && attepts > 0) {
//     passwordLabel = prompt('Please enter a password')
//
//     if (correctPassword !== passwordLabel) {
//         attepts--
//         alert(`Неверный пароль. Осталось попыток: ${attepts}`)
//
//     }
//
// }
//
// if (attepts === 0 ) {
//     console.log('вход запрещён')
// }  else {
//     console.log('добро пожаловать')
// } -- 1 задание


// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function getNumberType(number) {
//     if (number > 0) {
//         return 'положительное';
//     } else if (number < 0) {
//         return 'отрицательное';
//     } else {
//         return 'ноль';
//     }
// }
//
// let positiveCount = 0;
// let negativeCount = 0;
// let evenCount = 0;
// let oddCount = 0;
//
// let num = 1
//
// while (num !== 0) {
//     num = +prompt('введите число: ')
//
//     if (num !== 0) {
//         if (isEven(num)) {
//             evenCount++;
//         } else {
//             oddCount++
//         }
//
//
//         const type = getNumberType(num)
//         if (type === 'положительное') {
//             positiveCount++
//         } else if (type === 'отрицательное') {
//             negativeCount++
//         }
//     }
// }
//
// console.log(`Положительных: ${positiveCount}`);
// console.log(`Отрицательных: ${negativeCount}`);
// console.log(`Чётных: ${evenCount}`);
// console.log(`Нечётных: ${oddCount}`); --- задание 2









const person = {
name: 'John Doe',
age: 32,
'city center': true,
1: 'first',
4: 'last',
2: 'second',
}

console.log(person);


















