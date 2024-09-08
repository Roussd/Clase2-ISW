// EJERCICIO 6
// Funciones

function Mayusculas(str) {
    return str.toUpperCase();
}
console.log(Mayusculas("Hola Mundo"));

function Minusculas(str) {
    return str.toLowerCase();
}
console.log(Minusculas("Hola Mundo"));

function restar(num1, num2) {
    return num1 - num2;
}
const resultado1 = restar(20, 10)
console.log(resultado1);

function dividir(num1, num2) {
    return num1 / num2;
}
const resultado2 = dividir(8, 2)
console.log(resultado2);

function multiplicar(num1, num2) {
    return num1 * num2;
}
const resultado3 = multiplicar(8, 2)
console.log(resultado3);

function Longitud(str) {
    return str.length;
}
console.log(Longitud("Longitud"));