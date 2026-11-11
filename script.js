







// let name = ''
//
//
// function formatName(name) {
//     let trimmedName = name.trim()
//
//     let clearName = trimmedName[0].toUpperCase() + trimmedName.slice(1).toLowerCase()
//
//     return clearName
// }
//
// console.log(formatName('  iVAN   ')) --- задание 1







// let cardNumber = '+7(967)9553414'
//
// function maskCard(cardNumber) {
//    let hideNumber = '*'.repeat(cardNumber.length - 4) + cardNumber.slice(-4)
//
//    return hideNumber
// }
//
// console.log(maskCard(cardNumber))









// let title = 'My First Article'
//
//
// function createSlug(title) {
//     title = title.trim().toLowerCase().replace(/\s/g, '-')
//
//     return title
// }
//
// console.log(createSlug(title)) задача 3








// let email = prompt("Enter your email address")
//
//
// function getDomain(email) {
//     let domain = email.slice(email.indexOf('@') + 1)
//     return domain
// }
//
// console.log(getDomain(email)) задача 4





// const value = ''
//
//
// function isValidPrice(value) {
//     if (value <= 0 || !isFinite(value) || isNaN(value)) {
//         return false
//     } else {
//         return true
//     }
// }
//
// console.log(isValidPrice(value)) --- задача 5





// const text = ''
//
// function truncateText(text, maxLength) {
//     maxLength = text.slice(0, maxLength)
//
//     return maxLength
// }
//
// console.log(truncateText('javaScript',4)) --- задача 6








// const price = '125.50'
//
//
// function splitPrice(price) {
//     let splitResult = price.split('.')
//
//     return splitResult
// }
//
// console.log(splitPrice(price)) --- задача 7





// const number = ''
//
//
//
// function formatNumber(number) {
//
//     let str = String(number)
//     let result = ''
//     let count = 0
//
//     for (let i = str.length - 1; i >= 0 ; i--) {
//         result = number[i] + result
//         count++
//         if (count === 3) {
//             result = '.' + result
//             count = 0
//         }
//     }
//  return result
// }
//
// console.log(formatNumber(1500)) --- последняя задача