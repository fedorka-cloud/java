

// const user = {
//     name: "Alex",
//     age: 25,
//     city: "Berlin",
//     isStudent: true
// }
//
//
// function showUserInfo(user) {
//     const isStudent = user.isStudent ? 'студент' : 'не студент'
//
//     return (`зовут ${user.name},возраст ${user.age},живёт в: ${user.city}, ${isStudent}`)
// }
//
//
// function isAdult(user) {
//     return user.age >= 18;
// }
//
// function changeCity(user, newCity) {
//     user.city = newCity;
//
// }
//
// const requestCity = prompt('в каком городе вы живёте?')
// changeCity(user, requestCity)
//
// console.log(user)
//
// console.log(isAdult(user))
// console.log(showUserInfo(user)) --







// const product = {
//     name: "Keyboard",
//     price: 100,
//     quantity: 5,
//     discount: 10
// }
//
// function getDiscountPrice(product) {
//     return product.price - product.discount
// }
//
// function getTotalPrice(product) {
//     return getDiscountPrice(product) * product.quantity
// }
//
// function showProduct(product) {
//     const discountPrice = getDiscountPrice(product)
//     const totalPrice = getTotalPrice(product);
//     const stockStatus = product.quantity === 0 ? 'нет в наличии' : product.quantity
//     const priceCategory = getTotalPrice(product) > 300 ? 'покупка дорогая' : 'нормальная цена'
//
//
//     return `
//     товар: ${product.name}
//     цена: ${product.price}
//     скидка: ${product.discount}%
//     цена со скидкой: ${discountPrice}
//     количество: ${stockStatus}
//     общая стоимость: ${totalPrice}
//     ${priceCategory}
//     `
// }
//
// console.log(showProduct(product))





// const student1 = {
//     name: "Alex",
//     age: 20,
//     grade: 51
// }
//
// const student2 = {
//     name: "Maria",
//     age: 19,
//     grade: 95
// }
//
// const student3 = {
//     name: "John",
//     age: 21,
//     grade: 45
// }
//
//
// function getGradeStatus(student) {
//     if (student.grade >= 90) {
//         return 'Отлично'
//     } else if (student.grade >= 70) {
//         return 'Хорошо'
//     } else if (student.grade >= 50) {
//         return 'Удовлетворительно'
//     } else {
//         return 'не сдал'
//     }
// }
//
// let totalSum = 0
//
//
// for (let i = 1; i <= 3; i++) {
//     if (i === 1) {
//         totalSum += student1.grade;
//     } else if (i === 2) {
//         totalSum += student2.grade;
//     } else if (i === 3) {
//         totalSum += student3.grade;
//     }
// }
//
//
//
//
// console.log(getGradeStatus(student1))




// const product1 = {
//     name: "Laptop",
//     price: 1000,
//     quantity: 3
// }
//
// const product2 = {
//     name: "Mouse",
//     price: 25,
//     quantity: 0
// }
//
// const product3 = {
//     name: "Monitor",
//     price: 300,
//     quantity: 5
// }
//
//
// function restockProduct(product, quantity) {
//     product.quantity += quantity
// }
//
// function sellProduct(product, quantity) {
//     if (product.quantity >= quantity) {
//         product.quantity -= quantity
//     } else {
//         console.log('нет в наличии')
//     }
// }
//
// let totalCost = (product1.quantity * product1.price) +
//     (product2.quantity * product2.price) +
//     (product3.quantity * product3.price)
//
// console.log(totalCost)





const client = {
    name: "Alex",
    balance: 2000,
    creditLimit: 500,
    debt: 0,
    isBlocked: false
}

function showAccount(client) {
    if (client.isBlocked === true) {
        alert(`
            Имя: не доступно
            Баланс:  не доступно
            Кредитный лимит: не доступно
            Долг: не доступно
            Заблокирован: да
    `)
    } else {
        alert(`
            Имя: ${ client.name }
            Баланс: ${ client.balance }
            Кредитный лимит: ${ client.creditLimit }
            Долг: ${ client.debt }
            Заблокирован: нет`
        )
    }
}


function deposit(client, amount) {
    if (client.isBlocked === true) {
        console.log("Операция невозможна")
        return
    }

    if (amount < 0) {
        alert('неккоректное число')
        return;
    }

    client.balance += amount;
}


function withdraw(client, amount) {
    if (client.isBlocked === true) {
        console.log("Операция невозможна")
        return
    }

    if (amount < 0 || isNaN(amount)) {
        alert('неккоректные данные')
        return;
    }

    if (amount > client.balance + client.creditLimit) {
        alert("недостаточно средств");
        return;
    }

    if (amount > client.balance) {
        let getCredit = amount - client.balance
        client.balance = 0
        client.creditLimit -= getCredit
        client.debt += getCredit
    } else {
        client.balance -= amount
    }



}

function takeCredit(client, amount) {
    if (client.isBlocked === true) {
        console.log("Операция невозможна")
        return
    }


    if (amount < 0) {
        alert('неккоректное число')
        return;
    }

    if (client.creditLimit >= amount) {
        client.creditLimit -= amount
        client.balance += amount
        client.debt += amount
    } else {
        alert('error')
    }
}


function repayCredit(client, amount) {
    if (client.isBlocked === true) {
        console.log("Операция невозможна")
        return
    }

    if (amount < 0) {
        alert('неккоректное число')
        return;
    }

    if (client.balance >= amount && client.debt >= amount) {
        client.creditLimit += amount
        client.balance -= amount
        client.debt -= amount
    } else {
        console.log('error')
    }
}



function showMenu() {

    let menu = +prompt('Меню:\n'+
        '1 — Проверить баланс\n'+
        '2 — Пополнить счёт\n' +
        '3 — Снять деньги\n' +
        '4 — Взять кредит\n' +
        '5 — Погасить кредит\n' +
        '6 — Заблокировать счёт\n' +
        '0 — Выйти\n')

    if (menu >= 0 && menu < 7) {
        return menu

    } else {
        alert('error')
    }



}

let userCoice = showMenu()



while (userCoice !== 0) {
    switch (userCoice) {
        case 1: {
            showAccount(client)
            break
        }

        case 2: {
            if (client.isBlocked === true) {
                alert('ваша картка заблокирована,вы не можете пользоваться финансовыми операциями')
            } else {
                let amount = +prompt('введите сумму для пополнения: ')
                deposit(client, amount)
            }
            break
        }

        case 3: {
            if (client.isBlocked === true) {
                alert('ваша картка заблокирована,вы не можете пользоваться финансовыми операциями')
            } else {
                let amount = +prompt('введите сумму для снятия: ')
                withdraw(client, amount)
            }
            break
        }

        case 4: {
            if (client.isBlocked === true) {
                alert('ваша картка заблокирована,вы не можете пользоваться финансовыми операциями')
            } else {
                let amount = +prompt('введите сумму для кредита: ')
                takeCredit(client, amount)
            }
            break
        }

        case 5: {
            if (client.isBlocked === true) {
                alert('ваша картка заблокирована,вы не можете пользоваться финансовыми операциями')
            } else {
                let amount = +prompt('введите сумму для возврата кредита:')
                repayCredit(client, amount)
            }
            break
        }
        case 6: {
            client.isBlocked = true
            break
        }

    }
    userCoice = showMenu()
}





