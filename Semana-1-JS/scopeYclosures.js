// Scope y Closures: Scope (Ambito)
// El scope determina desde qué partes del código puedes acceder a una variable.

// Scope y Closures: Global Scope
// Las variables declaradas fuera de cualquier función tienen un ámbito global
// Se pueden acceder desde cualquier parte del código.

let ejemplo_1 = 'Hola';
// Esta funcion accede a la variable global let ejemplo_1 = 'Hola';
function saludar(){
    console.log(ejemplo_1); 
}
saludar();

// Scope y Closures: Funcion Scope
// Las variables declaradas dentro de una función solo existen dentro de esa función.
function Ejemplo_2(){
    let valor = 'saludas';
// Esto no dara error, ya que esta dentro de la funcion donde esta declarada la variable.
    console.log(valor);
};
// Esto dara error, debido que la variable "valor" esta definida dentro
// de la funcion "saludar_2()";

// console.log(valor);

// Scope y Closures: Block Scope
// Variables dentro de un bloque { } como if, for, etc.
if(true){
    let ejemplo_3 = 'Holaaa';
}
// Dara error ya que no se encuentra en el mismo bloque " { } "
// console.log(ejemplo_3);

// Scope y Closures: Closures
// Un closure es cuando una función recuerda el scope en el que fue creada, 
// incluso si se ejecuta fuera de ese scope
function Ejemplo_4(){
    let contador = 1;

    return function(){
        console.log("Numero: ", contador++);
    };
}
// Aquí, la función retornada es un closure que sigue accediendo a contador aunque Ejemplo_4() 
// ya terminó de ejecutarse.
const contar = Ejemplo_4();

// Aqui se realizo un bucle, cuando i sea menor o igual a 20 termine de ejecutarse y no hacerlo manualmente
for(let i = 1; i <= 20; i++){
    contar();
    i;
}

//  ¿Por qué son útiles los closures?
// Permiten encapsular datos.
// Hacen posible la programación funcional. 
// Son la base de los módulos, callbacks, y funciones que recuerdan contexto.