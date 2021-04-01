//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = 100;
let i = 2;
while (i <= n) {
    let j = 2;
    let count = 0;
    while (j < i) {
        if (i % j === 0) {
            count += 1;
        }
        j++;
    }
    if (count === 0) {
        console.log(i);
    }
    i++;
}
