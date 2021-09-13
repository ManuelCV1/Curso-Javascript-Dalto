numero1 = 10;
numero2 = 20;

resultado1= numero1 + numero2;

resultado2 = "" + numero1 + numero2; // Una forma de forzar una concatenacion con un numero es añadiendo una "" o '' , de tal forma se convierte la variable numero2 en una cadena de texo...

alert(resultado1);
alert(resultado2);


/*---Usando Template String---*/ 
resultado3 = `esto es una concatenacion de ${numero1} + ${numero2}`;
alert(resultado3);


let codigoHtml = `<h1>Hola "esto"  es html</h1>`; // con los Backticks ó comillas fuertes podemos escribir codigo html sin problemas.
document.write(codigoHtml);
