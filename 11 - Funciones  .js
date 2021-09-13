
// Funcion sencilla
function saludo1 (){
    alert('hola');
}
saludo1();


// Otra forma de escribir una funcion sencilla
let saludar = function (){
    alert('amigo');
} 
saludar();



// Funcion que retorna un valor (return)
function saludo2 (){
   return prompt('¿Como estas?');
}

let respuesta1 = saludo2();
alert('estas ' + respuesta1 );



// Funcion con parametros
function suma1 (numero1,numero2){
    let sum = numero1 + numero2;
    alert(sum);
}
suma1(20,30); 


// Funcion flecha
let suma2 = (num1,num2) => {
    let resultado2 = (num1 + num2);
    alert('La suma es ' + resultado2);
}
suma2(3,5);



// 1era simplificacion usando funcion flecha 
let numero3 = entrada1 => {
    let resul = entrada1 + 60;
    return resul;
}
let suma = numero3(40);
alert(`La suma del numero + 60 es = ${suma}`);
/*cuando sólo sea un parametro se puede eliminar los parentesis*/


// 2da y 3era simplificacion usando funcion flecha : 
let numero4 = entrada2 => entrada2 + 70;
let resultado = numero4(100);
alert('El resultado final es ' + resultado);
/*Cuando la funcion es solo una linea de codigo, se pueden eliminar corchetes y no hace falta escribir el return (retorna automaticamente)*/


