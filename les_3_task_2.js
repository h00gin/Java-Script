/* Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/



let basket = [
    ['монитор', 2000, 2],
    ['ноутбук', 40000, 5],
    ['мышь', 200, 50]
];

//с использованием reduce

function countBasketPrice(list) {
    return list.reduce(function (sum, elem) {
        return sum + elem[1] * elem[2];
    }, 0);
}

//с использованием цикла
function countBasketPriceCicle(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        let multi = list[i][1] * list[i][2];
        sum += multi;
    }
    return sum;
}
alert(countBasketPrice(basket));
alert(countBasketPriceCicle(basket));