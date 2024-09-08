// EJERCICIO 4
// Condicionales

const num1 = 10;
const num2 = 20;
const num3 = 30;

console.log(`Número 1: ${num1}, Número 2: ${num2}, Número 3: ${num3}\n`);

console.log(`El número más grande es: ${Math.max(num1, num2, num3)}`);
console.log(`El número más pequeño es: ${Math.min(num1, num2, num3)}`);

if (num1 % 2 === 0) {
    console.log("El número 1 es par");
} else {
    console.log("El número 1 es impar");
}

if (num2 % 2 == 0) {
    console.log(`${num2} es par`);
} else {    
    console.log(`${num2} es impar`);
}

if (num3 % 2 == 0) {
    console.log(`${num3} es par`);
} else {
    console.log(`${num3} es impar`);
}

if (num1 % 5 == 0) {
    console.log(`${num1} es múltiplo de 5`);
} else {
    console.log(`${num1} no es múltiplo de 5`);
}

if (num2 % 5 == 0) {
    console.log(`${num2} es múltiplo de 5`);
} else {
    console.log(`${num2} no es múltiplo de 5`);
}

if (num3 % 5 == 0) {
    console.log(`${num3} es múltiplo de 5`);
} else {
    console.log(`${num3} no es múltiplo de 5`);
}