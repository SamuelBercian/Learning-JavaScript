// Bucles: for
// Usado cuando sabes cuántas veces quieres repetir algo.
for(let i = 1; i <= 20; i++){
    console.log('Hola ', i);
}

// Bucles: for of
// Recorre los elementos de un iterable (como arrays o strings).
const frutas = ["Sandias", "Kiwi", "Tomate", "fresa", "cereza"];

for(const fruta of frutas){
    console.log(fruta);
}

// Bucles: for in
// Recorre las propiedades enumerables de un objeto.
const persona = {
    nombre: "samuel",
    edad: 20
};

for(const perso in persona){
    console.log(perso, ": ", persona[perso]);
}

// Bucles: while
// Se ejecuta mientras una condición sea verdadera.
let i = 1;

while(i <= 10){
    console.log("JavaScript: ", i);
    i++;
}

// Bucles: do while
// Primero ejecuta el bloque, luego verifica la condición.
let j = 0;

do{
    console.log("Numeros: ", j);
    j++;
} while(j <= 10);

