class Calculadora {
    constructor(){

    }
 suma(num1,num2){
        return num1 + num2; 
    }
 resta(num1,num2){
        return num1 - num2;
    }
 multiplicacion(num1,num2){
        return num1 * num2;
    }
 division(num1,num2){
        return num1 / num2;
    }
 potencia(num1,num2){
        return num1**num2;
    }
 raizCuadrada(num1){
        return Math.sqrt(num1);
    }
 raizCubica(num1){
        return Math.cbrt(num1);
    }
}

let calculadora = new Calculadora();

let eleccion = prompt(`Escoge la operación que deseas hacer:
        1: Suma , 2: Resta , 3: Multiplicación , 4: División, 5: Potenciación,
        6: Raiz Cuadrada, 7: Raiz cubica`);


if (eleccion == 1){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = calculadora.suma(num1,num2);
    alert(`El resultado de la suma es ${resul}`);
}

else if (eleccion == 2){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = calculadora.resta(num1,num2);
    alert(`El resultado de la resta es ${resul}`);
}

else if (eleccion == 3){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = calculadora.multiplicacion(num1,num2);
    alert(`El resultado de la multiplicación es ${resul}`);
}

else if (eleccion == 4){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = calculadora.division(num1,num2);
    alert(`El resultado de la división es ${resul}`);
}

else if (eleccion == 5){
    num1 = prompt('Numero 1:');
    num2 = prompt('Numero 2:');
    let resul = calculadora.potencia(num1,num2);
    alert(`${num1} elevado a ${num2} es igual a = ${resul}`);
}

else if (eleccion == 6){
    num1 = prompt('Numero:');
    let resul = calculadora.raizCuadrada(num1);
    alert(`La raiz cuadrada de ${num1} es = ${resul}`);

}

else if (eleccion == 7){
    num1 = prompt('Numero:');
    let resul = calculadora.raizCubica(num1);
    alert(`La raiz cubica de ${num1} es = ${resul}`);

}

else{
    alert('Operción no encontrada');
}