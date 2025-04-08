// Funciones: Declaracion de Funcion
// Se puede llamar antes de ser declarada (hoisting) y Es la forma más clásica.
function Ejemplo_1(nombre){
    console.log("Hola, ", nombre);
};

// Funciones: Expresion de funcion
// Se asigna a una variable y No tiene hoisting, solo se puede usar después de ser declarada.
const Ejemplo_2 = function miNombre(nombre){
    console.log("Hola, ", nombre);
};

// Funciones: Funciones de flecha
// Más concisa, ideal para funciones cortas y No tiene su propio this (útil en programación orientada a objetos).
const Ejemplo_3 = (miNombre) => {
    console.log("Hola, ", nombre);
};

// Forma mas corta si solo se necesita devolver un valor+
let Ejemplo3_1 = (a, b) => a + b;

// Funciones: Funciones anonimas
// No tienen nombre y suelen usarse como argumentos en otras funciones
setTimeout(function(){
    console.log("Hola a todos, despues de X segundos");
}, 1000);

// Funciones: Funciones como metodos de objetos
const Ejemplo_5 = {
    nombre: "Pinocho",
    edad: 1,

    saludaDesdeObjetos(){
        console.log('Hola a todos, me llamo: ', this.nombre);
    }
};