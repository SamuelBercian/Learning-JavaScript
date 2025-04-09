// Arrays: Creacion de Arrays
// Array vacio
const Ejemplo_1 = [];

// Arrays: Arrays con elementos
// Con String
const Ejemplo_2 = ['Array', "Con", `Elementos`];

// Con numeros
const Ejemplo2_1 = [1, 2, 3, 4, 5];

// Tambien se puede usar como constructor (No es tan comun)
const Ejemplo2_2 = new Array('Array', 'Como', 'Constructor');

// Arrays: Acceder a los elementos
const Ejemplo_3 = ['Posicion 0', 'Posicion 1', 'Posicion 2'];
console.log(Ejemplo_3[0]);

// Para ver el tamaño del array (Basicamente la cantidad de elementos que tiene el array)
console.log(Ejemplo_3.length);

// Arrays: Modificacion de elementos
const Ejemplo_4 = [1, 2, 3, 4, 5];

// Puedes cambiar el valor de un elemento accediendo por su índice
Ejemplo_4[2] = 6;

console.log(Ejemplo_4[2]);

// Arrays: push y unshift Agregar elementos
const Ejemplo_5 = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

// Agregar elemento al final
Ejemplo_5.push('Elemento nuevo al final');

// Agregar elemento al inicio
Ejemplo_5.unshift('Elemento nuevo inicio');

// Mostrara todo los elementos incluyendo los que se agregaron al principio y al final
console.log(Ejemplo_5);

// Arrays: pop y shift Eliminar elementos
const Ejemplo_6 = ['Elemento inicio', 'Elemento mitad', 'Elemento final'];

// Eliminar ultimo elemento
Ejemplo_6.pop();

// Eliminar el primer elemento
Ejemplo_6.shift();

// Se mostrara el 'Elemento mitad' porque los otros estaran eliminados
console.log(Ejemplo_6);

// Arrays: Splice
const Ejemplo_7 = ['Elemento 1' /*Posicion 0*/, 'Elemento 2' /*Posicion 1*/, 'Elemento 3' /*Posicion 2*/, 'Elemento 4' /*Posicion 4*/];

// Eliminar primer elemento
// En Ejemplo_7.splice(1 es la posicion de donde se eliminara el elemento, 1 es la cantidad de elementos
// que queremos eliminar), entonces (1 Posicion, 1 Cantidad a eliminar)
// Se eliminara 'Elemento 1'
Ejemplo_7.splice(0, 1);
console.log(Ejemplo_7);

// Se modificara sin eliminar
// Ejemplo_7.splice(0 posicion, cantidad a modificar DEJAR EN 0, 'Nuevo elemento 1' sustituira
// a 'Elemento 1'), entonces 'Elemento 1' pasara a llamarse 'Nuevo elemento 1'
Ejemplo_7.splice(0, 0, 'Nuevo elemento 1');
console.log(Ejemplo_7);

// Modificar 'Elemento 3'
// En este caso Ejemplo_7.splice(2 posicion, 1 cantidad a afectar, 'Nuevo elemento 3')
Ejemplo_7.splice(2, 1, 'Nuevo elemento 3');
console.log(Ejemplo_7);

// Arrays: Slice
// Crea una copia parcial del array (no modifica)
Ejemplo_7.slice();

// Mostrara lo siguiente ['Elemento nuevo 1, Elemento 2, Elemento nuevo 3, Elemento 4]
console.log(Ejemplo_7);