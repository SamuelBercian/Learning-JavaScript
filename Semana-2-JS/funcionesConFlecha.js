// Funciones con Flecha: Sintaxis basica
const Ejemplo_1 = (nombre) =>{
    console.log('Saludos ', nombre);
};

Ejemplo_1('Pinocho');

// Funciones con Flecha: Sintaxis simplificada
const Ejemplo_2 = (nombre) => console.log('Hola a todos', nombre);
Ejemplo_2('Samuel');

// Si retorna algo
// Sin llaves {} y sin return, JavaScript asume que la expresión se retorna directamente.
const Ejemplo2_1 = (num1, num2) => num1 + num2;
console.log(Ejemplo2_1(1,1));

// Con multiples lineas de codigo
// Si la función hace más cosas o necesitas usar varias líneas, debes usar llaves {} y return:
const Ejemplo2_2 = (num1, num2) => {
    let resultado = num1 + num2;
    return resultado;
};
console.log("Suma de los numeros: ", Ejemplo2_2(2,2));

// ¿En qué se diferencian de las funciones normales?
// No tienen su propio this → Esto las hace ideales para algunos casos como callbacks.
// No se pueden usar como constructoras (new MiFuncion() no funciona).
// Siempre son anónimas (aunque se asignen a una variable).