let valor1 = true;
let valor2 = true;

let resultado1 = valor1 && valor2;
let resultado2 = valor1 || valor2;
let resultado3 = !resultado1;

alert(resultado1);
alert(resultado2);
alert(resultado3);



// Los operadores lógicos nos devuelven un resultado a partir de que se cumpla (o no) una condición, su resultado es booleano, y sus operando son valores lógicos o asimilables a ellos.



/*----Otros Ejemplos---- */

let numero1 = 23;
let numero2 = 24;
let numero3 = 25;
let numero4 = 30;

let op = ((numero1 > numero2) || (numero1 != numero2) && (numero3 > numero4) || (numero3 != numero4) );

document.write(op);
console.log(op);

/*

Tabla: 

AND Lógico (&&)	---->> Ejemplo:  expr1 && expr2

OR lógico (||)  ---->> Ejemplo:  expr1 || expr2

NOT lógico (!)	---->> Ejemplo:  !expr


*/