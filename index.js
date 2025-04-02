// 1. Declara una variable con let llamada nombre y asígnale tu nombre.
// 2. Reasigna un nuevo valor a nombre y muéstralo en la consola.
function variableLet(){
    // 1
    let nombre = prompt("Cual es su nombre?");
    alert('Su nombre es: ' + nombre);

    // 2
    nombre = prompt("Nuevo nombre: ");
    console.log("Su nuevo nombre: " + nombre);
}

// 1. Declara una variable con const llamada PI y asígnale el valor 3.1416.
// 2. Intenta reasignarle otro valor a PI y observa qué sucede.
function variableConst(){
    // 1.
    const PI = 3.1416;

    // 2.
    PI = prompt('Nuevo valor de PI: ');
    // No se muestra el alert, da error porque la variable es constante
    alert('PI = ' + PI);
}

// variableLet();
// variableConst();

// Declara una variable var edad = 25; dentro de un bloque {} y cambia su valor.
function variableVar2(){
    var edad = 25;

    edad = 20;

    alert('Edad ' + edad);
}

// Declara una variable let altura = 1.75; dentro de otro bloque {} y cambia su valor.
function variableLet2(){
    let altura = 1.71;

    if(altura <= 1.70)
    {
        altura = 1.75;
    }

    // Si se cumple la condicion la altura cambia del valor asignado a 1.75 y si no se cumple muestra la altura asignada principalmente
    alert(altura);
}

alert(edad);
alert(altura);