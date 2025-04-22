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
};


// Ahora se realiza el constructor de la clase anterior
const ejemplo_4 = new Ejemplo_4('Samuel Bercian', 20);
ejemplo_4.funcionDeEjemplo();

// Objetos: Acceso usando notacion de puntos
ejemplo_4.nombre = 'Acceso usando puntos';
ejemplo_4.edad = 20;

console.log(ejemplo_4.nombre);

// Objetos: Acceso usando notacion de corchetes
ejemplo_4["nombre"] = 'Acceso usando corchetes';
console.log(ejemplo_4["nombre"]);

// Objetos: Acceso dinamico o por bucles
for(let propiedad in ejemplo_4){
    console.log(propiedad + ': ' + ejemplo_4.nombre);
};

// Objetos: Modificacion del Objeto
// Objetos: Asignacion directa 
const Ejemplo_5 = {
    nombre: 'vacio',
    edad: 0
};

// Modificar una propiedad
Ejemplo_5.nombre = 'Propiedad Modificado';
Ejemplo_5.edad = 1;

// Agregar una propiedad
Ejemplo_5.apellido = 'Propiedad Agregada';

console.log(Ejemplo_5);

// Objetos: Modificacion de Corchetes

// Modificar propiedad con corchetes
Ejemplo_5["nombre"] = 'Propiedad Modificada con Corchetes';

// Agregar propiedad con corchetes
Ejemplo_5["email"] = 'Propiedad agregada con Corchetes';

console.log(Ejemplo_5);

// Objetos: Object assign()
// Copia las propiedades de uno o más objetos a otro (también sirve para modificar):
Object.assign(Ejemplo_5, {nombre: '', edad: 0});

//  También lo puedes usar para crear una copia modificada sin tocar el original
const objetoCopiadoSinModificar = Object.assign({}, Ejemplo_5, {nombre: '', edad: 0});

// Objetos: Spread Operator
// Forma moderna y elegante de copiar y modificar
const Ejemplo_7 = {
    ...Ejemplo_5,
    nombre: 'Propiedad',
    edad: 0
};

// Objetos: Eliminar propiedades con Delete
// Quita propiedades del objeto
delete Ejemplo_5.email;

// Objetos: Modificar objetos anidados
const objetosAnidados = {
    perfil: {
        nombre: 'Propiedad del objeto perfil',

        caracteristicas: {
            ojos: 'Color'
        }
    }
};

// Para modificar este objeto anidado hacemos lo siguiente
objetosAnidados.perfil.caracteristicas.ojos = 'Color nuevo';

console.log(objetosAnidados.perfil.caracteristicas.ojos);

// Objetos: Object.defineProperty()
// Permite definir o modificar propiedades con mas control (como hacerlas no modificables, ocultas, etc)
Object.defineProperty(Ejemplo_5, "dui", {
    nombre: '',
    writable: false
});