// Parametros y valores de retorno: Párametros
// Son variables que se definen entre paréntesis al declarar una función. 
// Sirven para recibir valores que la función utilizará internamente.
function Ejemplo_1(nombre){
    console.log('Hola, mi nombre es: ', nombre);
}

// nombre es el parámetro y "Samuel" es el argumento que se pasa al llamar la función.
Ejemplo_1('Samuel');

// Puede tener varios parámetros
function Ejemplo1_2(num1, num2){
    console.log('Suma: ', num1, '+', num2, '=', num1+num2);
}
Ejemplo1_2(2, 5);

// Párametros y valores de retorno: Valores de Retorno
// Una función puede devolver un valor usando la palabra clave return. 
// Este valor puede ser almacenado o usado más adelante.
function Ejemplo_2(num1, num2){
    return num1 + num2;
}
// return num1 + num2 devuelve el resultado de la operación y Ese valor se guarda en la variable suma
let suma = Ejemplo_2(2, 2);
console.log('Suma: ', suma);

