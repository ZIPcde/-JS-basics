/*Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/
let numPow = (number) => {
    let result = number * number * number;
    return result;
};
let sumOfPows = numPow(2) + numPow(3);
console.log(`Задача №1: ${sumOfPows}`);
/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/
let inputSalary = parseInt(prompt("Укажите размер заработной платы"));
if (inputSalary != inputSalary) {
    throw new Error("Задача №2: Значение задано неверно!!!");
};
let taxCollection = (salary) => {
    console.log(`Задача №2: Размер заработной платы за вычетом налогов равен ${salary * 0.87}`);
};
taxCollection(inputSalary);
/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/
let input = (inputNumber) => {
    let buffer = parseInt(prompt(`Задача №3: Укажите число № ${inputNumber}`));
    if (buffer != buffer) {
        throw new Error(`Задача №3: Значение ${inputNumber}-го числа задано неверно!!!`);
    };
    return buffer;
};
let callOfInputPrompts = (first = 1, second = 2, third = 3) => {
    let result = 0;
    let number1 = input(first);
    let number2 = input(second);
    let number3 = input(third);
    if (number1 >= number2 && number1 >= number3) {
        result = number1;
    } else if (number2 >= number1 && number2 >= number3) {
        result = number2;
    } else if (number3 >= number1 && number3 >= number2) {
        result = number3;
    } else throw new Error(`Возникла ошибка!!!`);
    return result;
};
console.log(`Задача №3: максимальное значение из введенных Вами: ${callOfInputPrompts()}`);
/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/
console.log("Задача №4:")
const sum = (num1 = 0, num2 = 0) => {
    result = num1 + num2;
    return result;
};
const diff = (num1 = 0, num2 = 0) => {
    result = num1 > num2 ? num1 - num2 : num2 - num1;
    return result;
};
const mult = (num1 = 0, num2 = 0) => {
    result = num1 * num2;
    return result;
};
const div = (num1 = 0, num2 = 1) => {
    result = num1 / num2;
    return result;
};
console.log(sum(2, 6));
console.log(diff(2, 6));
console.log(mult(2, 6));
console.log(div(2, 6));