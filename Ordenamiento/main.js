//1. Crea una función que ordene de forma descendente un arreglo de números.
//Entrada -> [9,3,1,6,5,88,-1,2,7]
//Salida -> [88,9,7,6,5,3,1,-1]
function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
}
// Ejemplo:
const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
console.log(ordenarDescendente(numeros)); // [88, 9, 7, 6, 5, 3, 1, -1]


//2. Crear una función que ordene una lista de caracteres según su valor decimal 
//de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
//Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]
function ordenarPorAscii(arr) {
    return arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}
// Ejemplo:
const caracteres = ['b', 'h', 'w', 'e', 'a'];
console.log(ordenarPorAscii(caracteres)); // ['a', 'b', 'e', 'h', 'w']


//3. Crear una clase Alumno con los siguientes datos:
//Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
//Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.
class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / this.calificaciones.length;
    }
}

class Salon {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    ordenarPorPromedio() {
        return this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
}
// Ejemplo:
const salon = new Salon();
salon.agregarAlumno(new Alumno('Karina', [8, 9, 10, 7, 6]));
salon.agregarAlumno(new Alumno('Esmeralda', [5, 6, 7, 8, 9]));
salon.agregarAlumno(new Alumno('Josefina', [9, 10, 10, 10, 9]));

console.log(salon.ordenarPorPromedio()); 
// Imprime los alumnos ordenados por promedio de mayor a menor


//4. Crear una funcion que ordene palabras de menor número de letras a mayor.
//Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
//Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]
function ordenarPorLongitud(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
// Ejemplo:
const palabras = ["adios", "hola", "maximo", "uno", "despedida"];
console.log(ordenarPorLongitud(palabras)); // ["uno", "hola", "adios", "maximo", "despedida"]


//5. Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
//Entrada -> [[7,3],[2,2],[1,0],[4,3]]
//Salida -> [[1,0],[2,2],[4,3],[7,3]]
function ordenarPorDistancia(arr) {
    return arr.sort((a, b) => {
        const distanciaA = Math.sqrt(a[0] ** 2 + a[1] ** 2);
        const distanciaB = Math.sqrt(b[0] ** 2 + b[1] ** 2);
        return distanciaA - distanciaB;
    });
}
// Ejemplo:
const coordenadas = [[7, 3], [2, 2], [1, 0], [4, 3]];
console.log(ordenarPorDistancia(coordenadas)); // [[1, 0], [2, 2], [4, 3], [7, 3]]
