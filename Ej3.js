// EJERCICIO 3
// Operadores de asignación y comparación

const num1 = 15;
const num2 = 20;
const num3 = '25';

if(num1 >= num2) {
    console.log(`${num1} es mayor o igual que ${num2}`);
}else{
    console.log(`${num1} es menor o igual que ${num2}`);
}

if (num1 < num3) {
    console.log(`${num1} es menor que ${num3}`);
}

if (num3 < num2) {
    console.log(`${num3} es menor que ${num2}`);
}

if (num3 !== num1) {
    console.log(`${num3} es extrictamente diferente a ${num1}`);
}

if (num1 === num2) {
    console.log(`${num1} es extrictamente igual a ${num3}`);
}
