
let eleccion = prompt(`Escoge la operación que deseas hacer:
1: Suma , 2: Resta , 3: Multiplicación , 4: División`);

const suma = (num1,num2) => num1 + num2;
const resta = (num1,num2) => num1 - num2;
const multiplicacion = (num1,num2) => num1 * num2;
const division = (num1,num2) => num1 / num2;

if (eleccion == 1){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = suma(num1,num2);
    alert(`El resultado de la suma es ${resul}`);
}

else if (eleccion == 2){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = resta(num1,num2);
    alert(`El resultado de la resta es ${resul}`);
}

else if (eleccion == 3){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = multiplicacion(num1,num2);
    alert(`El resultado de la multiplicación es ${resul}`);
}

else if (eleccion == 4){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = division(num1,num2);
    alert(`El resultado de la división es ${resul}`);
}

else{
    alert('Operción no encontrada');
}