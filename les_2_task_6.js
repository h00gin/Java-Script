/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/

function sumNum(a, b) {
    return a + b;
}

function diffNum(a, b) {
    return a - b;
}

function multipNum(a, b) {
    return a * b;
}

function divisionNum(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sumNum(arg1, arg2);
        case '-':
            return diffNum(arg1, arg2);
        case '*':
            return multipNum(arg1, arg2);
        case '/':
            return divisionNum(arg1, arg2);
    }
}

alert(mathOperation(5, 2, '+'));
alert(mathOperation(5, 2, '-'));
alert(mathOperation(5, 2, '*'));
alert(mathOperation(5, 2, '/'));