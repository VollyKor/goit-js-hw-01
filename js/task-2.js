// Напиши скрипт проверки количества товаров на складе.
//  Есть переменные total (количество товаров на складе) 
//  ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, 
// превышающее количество товаров на складе,
// то выведи сообщение "На складе недостаточно твоаров!".

// В другом случае выводи сообщение 
// "Заказ оформлен, с вами свяжется менеджер".

// Проверь работоспособность кода с разными значениями 
// переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;


const total = 100;
const ordered = 130;


// var 1
total < ordered ? console.log('На складе недостаточно твоаров!') : console.log('Заказ оформлен, с вами свяжется менеджер');

// var 2
// if (total < ordered) {
//     console.log('На складе недостаточно твоаров!')
// }
// else {
//     console.log('Заказ оформлен, с вами свяжется менеджер')
// }