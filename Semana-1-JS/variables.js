// Variables en JavaScript
{
    var var_Definicion;
    /*
        Var
            var: No recomendable para el uso moderno, su ambito de funcion (Accesible solamente en la funcion que fue declarada).
        
        Ambito: De función
        Hoisting: Si, se inicializa en undefined
        Reasignable: Si
        Redeclarable: Si
        Uso recomendado: No en la actualidad
    */

    let let_Definicion;
    /* 
        let
            let: Forma moderna, su ambito de bloque (Accesible dentro de las llaves donde fue declarada).

        Ambito: De bloque
        Hoisting: Si, pero no se inicializa automaticamente
        Reasignable: Si
        Redeclarable: No
        Uso recomendado: Para valores que van a cambiar
    */ 

    const const_Definicion = 3.1416;
    /*
        Const
            const: Se utiliza solo en variables constantes, su ambito de bloque (Accesible dentro de las llaves donde fue declarada).

        Ambito: De bloque
        Hoisting: Si, pero no se inicializa automaticamente
        Reasignable: No
        Redeclarable: No
        Uso recomendado: Para valores constantes (Valores que no van a cambiar)
    */
}

// Ejemplo 1
// var var_ejemplo = prompt("Tu edad: ");
// console.log("Tu edad es: ", var_ejemplo);

// let let_ejemplo = prompt("Tu nombre es: ");
// console.log("Tu nombre es: ", let_ejemplo);

// const const_ejemplo = 3.1416;
// console.log("El valor de PI es: ", const_ejemplo);

// Ejemplo 2
// Cambiar el tipo de variable var a let
function var_ejemplo2(){
    if(true){
        let saludo = 'Hola desde var'; //Se cambio de var a let
    }
    console.log(saludo); // Da error, donde 'saludo' no esta definido
}

function let_ejemplo2() {
    if (true) {
        let mensaje = "Hola desde let";
        console.log(mensaje);
    }

    let mensaje = 'Hola desde let en otro bloque';
    console.log(mensaje);
}

function const_ejemplo2(){
    const PI = 3.1416;
    console.log("El valor de PI es:", PI);
    
    PI = 3.14; // Da error, No se puede cambiar el valor a una variable constante

    const persona = {
        nombre: 'Samuel',
        edad: 20
    };

    persona.edad = 21; // No da error, debido que el objeto es de tipo constante, no sus propiedades

    console.log(persona);
}



