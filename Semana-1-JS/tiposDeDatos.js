// Tipos de datos: numericos
{
    let edad = 20; // Tipo entero (integer)
    let dinero = 10.10 // Tipo decimal (float o numbes con putno decimal)
    let infinito = Infinity // Tipo especial que representa el infinito
    let noNumero = NaN // No es numero, representa un valor que no es numerico, aunque siga siendo un 'number'
}

// Tipos de datos: cadenas
let ejemplo1 = "Samuel"; // ( ” ” )
let ejemplo2 = 'Samuel';  //( ' ' )
let ejemplo3 = `Samuel`; // ( ` ` )

// Se pueden utilizar cualquier forma comillas dobles (Ejemplo 1), comillas simples (Ejemplo 2) o backticks (Ejemplo 3)

// Tipos de datos: cadenas metodos comunes
console.log(ejemplo1.length); // muestra la longitud de la cadena
console.log(ejemplo1.toUpperCase()); // Convertir en mayusculas
console.log(ejemplo1.toLowerCase()); // Converir en minusculas
console.log(ejemplo1.includes("S")); // Ver si contiene una letra o palabra
console.log(ejemplo1.charAt(1)); // Obtener un caracter por posición

// Tipos de datos: boolean
let esMayor = true;
let esMenor = false;

// Ejemplo
let edad = 17 > 18 // Si el primer numero es mayor que el segundo es "true" pero si es al reves es "false"
console.log('Puedes votar', edad);

// Tipos de datos: Arrays
let numeros = [1, 2, 3, 4, 5];
let cadenaTexto = ['Samuel', 'Edwin', 'Jose'];
let mixto = [1, 'Samuel', true, [1, 2, 3]];

// Tipos de datos: Arrays metodos comunes
cadenaTexto.push('Rivera'); // Agrega al final
cadenaTexto.pop(); // Elimina el ultimo elemento
cadenaTexto.unshift('Mauricio'); // Agrega al inicio
cadenaTexto.shift(); // Elimina el primer elemento
console.log(cadenaTexto.length); // Cantidad de elementos dentro del array

// Tipos de datos: Objects
let persona =  {

    nombre: 'Samuel',
    
    edad: 30,
    
    esEstudiante: true,
    
    direccion: {
    
    ciudad: 'San Salvador',
    
    pais: 'El Salvador'
    }
    };

// Tipos de datos: Objets maniipulacion de datos
persona.edad = 21; // Modifica la propiedad
persona.ocupacion = 'Ingeniero' // Agrega una nueva propiedad
delete persona.esEstudiante; // Elimina la propiedad

// Estructuras de control: sentencia if

// Ejemplo 1
let edad_1 = 17;

if(edad_1 >= 18){
    console.log('Tu eres mayor de edad', edad_1);
}else{
    console.log('tu eres menor de edad');
}

// Ejemplo 2
let dia = true;
if(dia == true){
    console.log('Buenos dias');
}else{
    console.log('Buenas noches');
}

// Ejemplo 3

let hora = prompt('Que hora es?: ');

if(hora <= 11.59){
    console.log('Buenos dias, son las ', hora, ' a.m');
} else if(hora >= 12.00){
    console.log('Buenas tardes, son las ', hora, ' p.m');
}else if(hora >= 18.00){
    console.log('Buenas noches, son las ', hora, ' p.m');
}

// Tipos de datos: Switch

// Ejemplo Switch
let valor1 = prompt('Ingrese valor 1: ');
let valor2 = prompt('Ingrese valor 2: ');

let opcion = prompt('Que desea hacer?, sumar, restar, dividir o multiplicar');


switch(opcion){
    case 'sumar':
        console.log('La suma total es: ', valor1 + valor2);
        break;
    
    case 'restar':
        console.log('La resta total es: ', valor1 - valor2);
        break;

    case 'dividir':
        console.log('La division total es: ', valor1 / valor2);
        break;
    
    case 'multiplicar':
        console.log('La multiplicacion total es: ', valor1 * valor2);
        break;
    
    default:
        console.log('Ingrese una opcion valida!');
}