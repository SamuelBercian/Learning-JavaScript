// Objetos: Creacion, acceso y modificacion
// Objetos: Creacion (Constructora)
// Puedes crear un objeto de varias maneras, la más común es usando una función constructora o la sintaxis de clase 
function Ejemplo_1(nombre, edad){
    this.nombre = nombre;
    this,edad = edad;
}

// Creacion del objeto
const ejemplo_1 = new Ejemplo_1();

// Objetos: Creacion (Sintaxis clase)
class Ejemplo_2{
    constructor(nombre, edad){
        this.nombre = nombre;
        this,edad = edad;
    }
}
// Creacion del objeto
const ejemplo_2 = new Ejemplo_2();

// Objeto: Creacion (Objeto literal)
const Ejemplo_3 = {
    nombre: '',
    edad: null
};

// Objetos: Acceso a atributos
// Este es un ejemplo de como se puede asignar y acceder a las propiedades del objeto
ejemplo_2.nombre = 'Samuel';
ejemplo_2.edad = '20';
console.log(ejemplo_2.nombre, ejemplo_2.edad);

// Objetos: Acceso a métodos (Si estan en clase u objeto)
class Ejemplo_4{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    funcionDeEjemplo(){
        console.log('Hola, tu nombre es: ', this.nombre, 'y tu edad es: ', this.edad);
    }
}

// Ahora se realiza el constructor de la clase anterior
const ejemplo_4 = new Ejemplo_4('Samuel Bercian', 20);
ejemplo_4.funcionDeEjemplo();

