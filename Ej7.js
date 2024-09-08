// EJERCICIO 7
// Arrays


function sumaArrayNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumaArrayNumbers([1, 2, 3, 4, 5]));

function promedioArrayNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(promedioArrayNumbers([1, 2, 3, 4, 5]));

function Mayusculas(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
console.log(Mayusculas(["hola", "mundo"]));

function NumerosPares(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}
console.log(NumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));