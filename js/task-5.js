// Пользователь может оформить доставку товара к себе в страну, 
// указав ее при посещении страницы в prompt. Учти, 
// пользователь может ввести имя страны не только буквами 
// нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки 
// в указанную страну. Обязательно используй switch. 
// Формат сообщения: 
// 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, 
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


// 1. переменная в промт
// 2.1 приведение к нижнему регистру
// 2.2 Сравнение в свитч

console.log('task-5');

const deliveryCountry = prompt('укажите страну доставки');
let deliveryCost; 

if (deliveryCountry === null) {
    console.log('Страна доставки не указана');  
}
else {
    switch ( deliveryCountry.toLowerCase() ) {
        case 'китай' :
            deliveryCost = 100;
            console.log(`${deliveryCost} кредитов`);
            break;
        
        case 'чили' :
            deliveryCost = 250;
            console.log(`${deliveryCost} кредитов`);
            break;

        case 'австралия' :
            deliveryCost = 170;
            console.log(`${deliveryCost} кредитов`);
            break;

        case 'индия':
            deliveryCost = 80;
            console.log(`${deliveryCost} кредитов`);
            break;

        case 'ямайка':
            deliveryCost = 120;
            console.log(`${deliveryCost} кредитов`);
            break;
        
        default :
            console.log(`доставка в страну ${deliveryCountry} недоступна` );

}
}
