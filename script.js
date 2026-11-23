

// const names = ['Анна', 'Борис', 'Виктор', 'Дарья']
//
// names.forEach((name, num) => {
//     console.log(`Участник №${num + 1}: ${name}`)
// })   --- 1.1




// const nums = [10, 25, 30, 45]
//
// nums.forEach(num => {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }) --- 1.2




// const nums = [100, 250, 500, 1200]
//
//
// console.log(nums.map((num) => {
//     return `${num - (num * 10 / 100 )}₽`.toString()
// })) 2.1




// const users = [
//     { id: 1, firstName: 'Иван', lastName: 'Иванов', age: 25 },
//     { id: 2, firstName: 'Елена', lastName: 'Смирнова', age: 30 },
//     { id: 3, firstName: 'Алексей', lastName: 'Попов', age: 19 }
// ]
//
// console.log(users.map(user => `id: ${user.id}, fullName: ${user.firstName} ${user.lastName}`)) --- 2.2





// const animals = ['кот', 'собака', 'слон', 'жираф', 'тигр', 'бегемот']
//
//
// console.log(animals.filter(animal => animal.length <= 4)) --- 3.1





// const products = [
//     { name: 'Ноутбук', price: 75000, inStock: true },
//     { name: 'Мышь', price: 1500, inStock: false },
//     { name: 'Клавиатура', price: 4500, inStock: true },
//     { name: 'Монитор', price: 22000, inStock: false }
// ]
//
//
// console.log(products.filter(product => product.inStock && product.price < 50000)) 3.2





// const students = [
//     { name: 'Ольга', grade: 92 },
//     { name: 'Максим', grade: 74 },
//     { name: 'Светлана', grade: 88 },
//     { name: 'Дмитрий', grade: 65 },
//     { name: 'Наталья', grade: 95 }
// ]
//
//
// const grades = students.filter(student => student.grade >= 85 )
//
//
// const result = grades.reduce((total, grade) => {
//     return total + grade.grade
// }, 0)
//
// console.log(result / grades.length) --- 5.1





// const accounts = [
//     { login: 'user1', email: 'User1@Mail.ru', isActive: true },
//     { login: 'user2', email: 'USER2@mail.ru', isActive: false },
//     { login: 'user3', email: 'User3@Yandex.ru', isActive: true }
// ]
//
//
//
// const emailActive = accounts.reduce((email, user) => {
//
//     if (user.isActive) {
//         email.push(user.email.toLowerCase())
//     }
//
//     return email
// }, [])
//
// console.log(emailActive) --- 5.2







const transactions = [
    { id: 1, category: 'Еда', amount: 500 },
    { id: 2, category: 'Транспорт', amount: 150 },
    { id: 3, category: 'Еда', amount: 1200 },
    { id: 4, category: 'Развлечения', amount: 2000 },
    { id: 5, category: 'Транспорт', amount: 300 }
]



const result = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
        acc[transaction.category] = []
    }

    acc[transaction.category].push(transaction)

    return acc;
}, {})



console.log(result)