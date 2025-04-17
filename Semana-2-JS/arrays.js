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

// Array: Busqueda y verificacion
// Array: Includes
// Este metodo verifica si existe algun elemento
const Ejemplo_8 = ['Nombre', 'Apellido', 'Edad'];
// Si el elemento devolvera un true (Se mostrara true en la consola)
console.log(Ejemplo_8.includes('Nombre'));  

// Array: indexOf
// Este metodo devuelve el indice del primer match
console.log(Ejemplo_8.indexOf('Apellido'));

// Array: lastIndexOf
// Este metodo devuelve el indice del ultimo match
console.log(Ejemplo_8.lastIndexOf('Edad'));

// Array: find
// Este metodo devuelve el primer elemento que cumpla algo
const Ejemplo8_1 = [1, 2, 3, 4, 5];
const encontrado = Ejemplo8_1.find(num => num > 2);
console.log(encontrado);

// Array: findIndex
// Este metodo devuelve el indice del primer elemento que cumpla algo
const numeros = [10, 20, 30, 40, 50];
const indice = numeros.findIndex(num => num > 1);
console.log(indice);

// Array: Transformacion y Recorrido
// Array: forEach
// Ejecuta una funcion por cada elemento
let Ejemplo_9 = [1, 2, 3, 4, 5];
// El resultado sera 7, 14, 21, 28, 35
Ejemplo_9.forEach(n => console.log(n * 7));

// Array: map
// Crea un nuevo array con los resultados
let nuevoArray = Ejemplo_9.map(n => n * 4);
// El resultado sera un nuevo array
console.log(nuevoArray);

// Array: filter
// Crea un nuevo array con elementos que cumplan una funcion
let creaElemento = Ejemplo_9.filter(n => n % 2 === 0);
// Resultado sera 2, 4
console.log(creaElemento);

// Array: reduce
// Reduce el array a un solo valor (promedio, suma, resta, etc)
let arrayUnValor = Ejemplo_9.reduce((acc, n) => acc + n, 0);
// Resultado sera 15
console.log(arrayUnValor);

// Array: sort
// Ordena los elementos (alfabeticos por defecto)
const Ejemplo_10 = ['Samuel', 'Jose', 'Pinocho', 'Bercian'];
Ejemplo_10.sort();
// El array se ordena alfabeticamente
console.log(Ejemplo_10);

// Array: reverse
// Invierte el orden del array
Ejemplo_10.reverse();
console.log(Ejemplo_10);

// Array: Conversion y Union
// Array: join()
// Une elementos del array en un solo string
const Ejemplo_11 = ['a', 'b', 'c'];
// Resultado sera a-b-c
console.log(Ejemplo_11.join('-'));

// Array: toString
// Convierte el array en un string
// El resultado sera a,b,c
console.log(Ejemplo_11.toString());

// Array: concat()
// Une dos arrays
const Ejemplo_12 = ['este array', 'se unira', 'con el Ejemplo_11'];
let Concatenacion = Ejemplo_11.concat(Ejemplo_12);
// El resultado sera ['a', 'b', 'c', 'este array', 'se unira', 'con el Ejemplo_11']
console.log(Concatenacion);

// Arrays: flat()
// Aplana los arrays anidados
let Ejemplo_13 = [1, 2, [3, 4], [5, 6]];
let aplanado = Ejemplo_13.flat();
// Resultado: [1, 2, 3, 4, 5, 6]
console.log(aplanado);

