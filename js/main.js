let minNumber;
let maxNumber;

do {
    minNumber = Math.round(+prompt("Введіть, будь ласка, мінімальне значення", "0"));

} while (isNaN(minNumber) || minNumber < 0);

do {
    maxNumber = Math.round(+prompt("Введіть, будь ласка, максимальне значення", "100"));

    while (minNumber >= maxNumber) {
        maxNumber = Math.round(+prompt("Введіть, будь ласка, максимальне значення, яке більше мінімального"));
        if (maxNumber === 0) {
            break;
        };
    };

} while (isNaN(maxNumber) || maxNumber === 0);

let odd = confirm("Чи потрібно пропускати парні числа?");
let result = 0;

for (let i = minNumber; i < maxNumber + 1; i++) {
    if (odd === false) {
        result += i;
    } else {
        i % 2 === 0 ? 0 : result += i;
    };
};

console.log(`
Мінімальне значення: ${minNumber}
Маскимальне значення: ${maxNumber}
Чи потрібно пропускати парні числа?: ${odd}
Сума чисел: ${result}
`);
