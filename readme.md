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


















// const user = {
//     name: 'John',
//     friend: {
//         name: 'John Smith',
//     }
// }
//
// const user2 = {
//     name: 'John',
//     friend: {
//         name: 'John Smith',
//     }
// }
//
// function compareObject(obj1,obj2) {
//     const obj1Keys = Object.keys(obj1)
//     const obj2Keys = Object.keys(obj2)
//
//     if (obj1Keys.length !== obj2Keys.length) {
//         return false
//     }
//
//     for (const key in obj1) {
//         if (typeof obj1[key] === 'object') {
//             return compareObject(obj1[key], obj2[key])
//         }
//
//         if (obj1[key] !== obj2[key]) {
//             return false
//         }
//     }
//     return true
// }
//
// console.log(compareObject(user, user2))









// const sum = 12.14
//
//
// // console.log(parseInt(sum))
// // console.log(parseFloat(sum))
//
//
// console.log(Math.round(3.51))
// console.log(Math.floor(3.51))
// console.log(Math.ceil(3.51))
// console.log(Math.trunc(3.51))
//
//
// console.log(sum.toPrecision(3))
// console.log(sum.toFixed(3))
//
// console.log(Math.pow(10, 3))


// console.log(Math.sqrt(3))
// console.log(Math.cbrt(3))










// const name = 'steve'
//
// console.log(name.at(3))
// console.log(name.at(-2))
//
// console.log(name[3])
// console.log(name[name.length - 1])
//
// console.log(name.indexOf('st', 3))
// console.log(name.includes('st', 3))
// console.log(name.startsWith('st', 0))
// console.log(name.endsWith('st', 0))
//
//
//
// const str = 'javaScript'
//
// console.log(str.substring(0, 4))
// console.log(str.slice(0, 4))
// console.log(name.slice(-6))
//
//
// console.log(str.repeat(2))
//
//
//
//
// const text = '   hElLo WoRlD   '
//
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
//
// console.log(text.trim())
// console.log(text.trimStart())
// console.log(text.trimEnd())
//
//
// const message = 'hello, my name is steve, steve'
//
// console.log(message.indexOf('my'))
//
// console.log(message.startsWith('hel'))
// console.log(message.endsWith('my'))
//
// console.log(message.replace(/steve/g, 'alexandar'))
// console.log(message.replaceAll('steve', 'alexandar'))
//
//
// const number = '+7(967) 955 34 14'
//
// console.log(number.replace(/\d/g, '#'))
//
// const message2 = 'hello world'
//
// console.log(message2.split(','))












// const user = {
//     name: "Alex",
//     address: {
//         city: "Berlin"
//     }
// }
//
//
//
//
// function deepClone(user) {
//     let user2 = {}
//
//     for (let key in user) {
//         if (typeof user[key] === "object" && user[key] !== null) {
//             user2[key] = deepClone(user[key])
//         } else {
//             user2[key] = user[key]
//         }
//     }
//
//     return user2
// }
//
// console.log(deepClone(user))
// console.log(user)