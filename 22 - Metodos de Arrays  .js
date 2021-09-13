let array1 = ['manuel','carlos','maria'];

let array2 = ['jose','enrique','tomas'];

let array3 = ['pedro','miguel','marcos'];

let array4 = [1,2,3,4,5];

let array5 = [3,4,5];

let array6 = ['zapata','roberto','alfonso','cabrera'];

let array7 = ['borra','lapiz','sacapuntas','cuaderno'];

let array  = ['cabeza','piernas','brazos','tobillos','brazos'];

/*--Metodos Transformadores--*/

document.write(array1.pop());//Metodo pop (elimina el ultimo elemento del array y lo devuelve)
document.write('<br>'+ array1);//vemos como el array original queda modificado

document.write('<br>');

document.write(array2.shift());//Metodo shift (elimina el primer elemento del array y lo devuelve)
document.write('<br>'+ array2);//array original queda modificado

document.write('<br>');

document.write(array3.push('alberto'));//Metodo push (agrega uno o varios elementos y devuelve la nueva longitud del array)
document.write('<br>'+ array3);//array original queda modificado

document.write('<br>');

document.write(array4.reverse());//Metodo reverse (invierte el orden de los elementos del array y devuelve tambien el array modificado)
document.write('<br>'+ array4);//array original queda modificado

document.write('<br>');

document.write(array5.unshift(0,1,2));//Metodo unshift (agrega uno o varios elementos al inicio y devuelve la nueva longitud del array)
document.write('<br>'+ array5);//array original queda modificado

document.write('<br>');

document.write(array6.sort());//Metodo sort (ordena los elementos en orden alfa-numerico y devuelve tambien el array modificado)
document.write('<br>'+ array6);//array original queda modificado

document.write('<br>');

document.write(array7.splice(1,1,"lapicero","portaminas"));//Metodo splice (elimina elementos existentes y/o agrega nuevos elementos. Los 2 primeros parametros indican el rango para añadir y/o eliminiar. y devuelve los elementos elminados)
document.write('<br>'+ array7);//array original queda modificado

document.write('<br>');


/*--Metodos Accesores--*/

document.write(array.join(' - '));//Metodo join (transforma todos los elementos de la cadena a string y con el parametro se inserta la separacion deseada entre elementos)[el array original no se modifica]

document.write('<br>');

document.write(array.slice(0,3))//Metodo slice (devuelve una parte del array, especificando el rango con los parametros, primero:inicio , segundo:final no incluido)

document.write('<br>');


/*-Metodos Accesores que funcionan igual que con los Metodos de Cadena-*/

document.write(array.includes("brazos"));//Metodo includes (si un elemento se encuentra dentro del array devuelve true 

document.write('<br>');

document.write(array.indexOf("brazos"));//Metodo indexOf (si un elemento se encuentra dentro del array devuelve el indice donde se encuentra la primera coincidencia, si no existe devuelve -1)

document.write('<br>');

document.write(array.lastIndexOf("brazos"));//Metodo lastIndexOf (si un elemento se encuentra dentro del array devuelve el indice donde se encuentra la ultima coincidencia, si no existe devuelve -1)

document.write('<br>');

document.write(array.toString());//Metodo toString (convierte un elemento a string)

document.write('<br>');


/*--Metodos de Repetición (Bucle)--*/

array.filter(numero=>document.write(numero+'<br>'));//Metodo filter (ejecuta la funcion indicada una vez por cada elemento del array. El parametro de la funcion tendra como valor el elemento del array correspondiente al ciclo)

let result = array.filter(numero=>numero.length>6);
document.write(result);//Ademas filter nos permite crear un nuevo array con los elementos que retornen true en una determinada operacion.

document.write('<br>');

array.forEach(numero=>document.write(numero+'<br>'))//Metodo forEach (funciona exactamente igual a filter pero sin la opacion adicional de poder crear un array con los valores true de alguna operacion)











