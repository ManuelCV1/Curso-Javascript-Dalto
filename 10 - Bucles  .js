let numero1 = 0 ;
let numero2 = 0 ;
let numero3 = 0 ;



//Bucle While
while (numero1 < 10){ 
    numero1++;
    document.write(numero1 + '<br>');
}



// Bucle do While
do {                   //<<--- Siempre se ejecutara la 1era vez...
    numero2++;
    document.write(numero2)
}
while(numero2 <0)

// En el caso del do while , siempre se ejecutara al menos 1 vez el bucle (aunque no se cumpla la condicion del while)... 




// Uso del Break
while(numero3 < 100){
    numero3++;
    document.write(numero3);
    if(numero3 == 10){
        break;        //<---- Con el break puedo detener la ejecucion del codigo en un punto dado.
    }
}



// Bucle for
for (let i=0; i<6; i++){
    document.write(i +'<br>');

}



// Uso del continue
let contador=0; 
for (contador; contador<6; contador++){
    if (contador == 3){
        continue;      //<<--- Usando continue se puede saltar una iteración del bucle , en este caso cuando la variable sea iguala 3 se saltara el bucle...(por lo tanto en este caso no se mostrara en patalla el numero 3)
    }
    document.write(contador);
}
//Nota : Se puede declarar e inicializar la variable del bucle fuera del for (como en este caso se hizo) , pero al menos se debe especificar en el for que se utilizara dicha variable (es decir establecerla en la expresion inicial del for)...





// Bucle for in
let elementoArray = ['manuel','massiel','mariadny'];

for (let elemento in elementoArray ){
    document.write(elemento + '<br>');
}

/* El bucle for in nos permite recorrer en cada iteración el indice de un array u objeto.

Sintaxis:
for (variable in objeto){ 
  instrucción
}

  Nota: 

variable
Asigna un nombre de propiedad diferente a la variable en cada iteración. 

objeto
Objeto cuyas propiedades enumerables que no son símbolos se iteran.
*/

/* Otro ejemplo de for in*/
for (let elemento in elementoArray ){
    document.write(elementoArray[elemento]+ '<br>'); // Asi podriamos recorrer el valor que tiene cada elemento usuando el for in...
}





// Bucle for of
for (let elemento of elementoArray){
    document.write(elemento+ ' ');
}


/*El bucle for of nos permite recorrer el valor de cada elemento del array.*/




// Uso de label
let array1 = ['sabana grande','panteon','casa de will'];
let array2 = ['universidad','hogar','iglesia','familia'];

sentenciaLabel:
for (let array in array2){
    if (array == 2){
        for (let array of array1){
            break sentenciaLabel;  // Uso de label
            document.write(array + '<br>');
        }  
    }
    else{
        document.write(array2[array] + '<br>');
    }
}
/*La sentencia label la podemos usar para especificar el alcance de un break y/o continue*/