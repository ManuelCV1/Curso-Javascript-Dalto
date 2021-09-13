let cadena = new String("cadena de prueba");//Un string es un objeto


let cadena1 = "cadena de prueba";//Lo podemos escribir directamente asi

let cadena2 = "cadena";

let cadena3 = "cadena cadena cadena";

let cadena4 = "Cadena de Prueba";

let cadena5 = "    cadena    ";

let numero = 45;

let array = ['array','de','prueba'];

document.write(cadena1.concat(cadena2));//Metodo concat (Para concatenar)

document.write('<br>');

document.write(cadena1.startsWith(cadena2));//Metodo startsWith (para ver si una cadena comienza con otra [devuelve true])

document.write('<br>');

document.write(cadena1.endsWith(cadena2));//Metodo endsWith (para ver si una cadena termina con otra [devuelve true])

document.write('<br>');

document.write(cadena1.includes(cadena2));//Metodo includes (si una cadena puede encontrarse en otra [devuelve true])

document.write('<br>');

document.write(cadena1[2]);//Extra: En un string cada caracter tiene una posicion en el cual se amacena, y podemos acceder a dicho caracter

document.write('<br>');

document.write(cadena1.indexOf(cadena2));//Metodo indexOf (si una cadena puede encontrarse en otra cadena devuelve el indice del primer caracter de la cadena, si no existe devuelve -1)

document.write('<br>');

document.write(cadena3.lastIndexOf(cadena2));//Metodo lastIndex (funciona igual que indexOf pero devuelve el ultimo indice del primer caracter de la cadena)

document.write('<br>');

document.write(cadena1.padStart(30,123));//Metodo padStart (rellenar la cadena al principio con los caracteres deseados)

document.write('<br>');

document.write(cadena1.padEnd(30,123));//Metodo padEnd (rellenar la cadena al final con los caracteres deseados)

document.write('<br>');

document.write(cadena1.repeat(5));//Metodo repeat (devuelve la misma cadena , pero repetida la cantidad de veces indicada)

document.write('<br>');

document.write(cadena1.split("de"));//Metodo split (divide la cadena como le pidamos y nos devuelve un array)
document.write('<br>'+cadena1.split("de")[2]);//Accediendo a un elemento del array

document.write('<br>');

document.write(cadena1.substring(0,4));//Metodo substring (nos retorna un pedazo de la cadena que seleccionamos)

document.write('<br>');

document.write(cadena4.toLowerCase());//Metodo toLowerCase (convierte una cadena a minuscula)

document.write('<br>');

document.write(cadena4.toUpperCase());//Metodo toUpperCase (convierte una cadena a mayuscula)

document.write('<br>');

document.write(numero.toString()+'<br>');//Metodo toString
document.write(array.toString());//Convierte un elemento a string

document.write('<br>');


document.write(cadena5.trim());//Metodo trim (elimina los caracteres vacios del inicio y el final)
document.write('<br>'+cadena5.trim().length);//Propiedad length devuelve la longitud del elemento
document.write('<br>'+cadena5.length);//Verificamos la longitud mayor (debido a los espacios) de la cadena original sin aplicar trim


document.write('<br>');

document.write(cadena5.trimEnd());//Metodo trimEnd (funciona igual que trim pero solo elimina los caracteres vacios del final)

document.write('<br>');

document.write(cadena5.trimStart());//Metodo trimStart (funciona igual que trim pero solo elimina los caracteres vacios del inicio)

document.write('<br>');