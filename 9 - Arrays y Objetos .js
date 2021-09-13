let elemento1 = ['caracas','valencia',2007,true,"hola"]; // Array común 

alert(elemento1[4]);



/*------Crear array dentro de un Array------ */

let array1 = ['bien','correcto'];
let array2 = ['manuel','alejandra',array1]; //Forma 1
console.log(array2);


let array3 = [];
array3[0] = ['hola','bien','javier'];       //Forma 2
array3[1] = ['Como estas'];

console.log(array3);

/*------------------------------------------*/





/*----Array asociativo (Objeto)--- */

let pc = { 
    nombre : 'manuel',
    procesador : 'Intel celeron',
    ram : '2 Gb',
    memoria : '300 Gb'
}

alert(pc["nombre"]); // Podemos seleccionar un elemento...
alert(pc.ram); // Otra forma de seleccionar un elemento...



let procesador = pc["procesador"];// Podemos almacenar el valor de un elemento en una variable...
alert(procesador);


// Definicion de array asociativo (Objeto) : Un array asociativo es un array cuyos índices no son numéricos sinó cadenas de texto (claves). En JavaScript no existen realmente arrays asociativos pero podemos simularlos creando objetos y accediendo a sus propiedades.