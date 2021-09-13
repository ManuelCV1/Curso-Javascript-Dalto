let entradaDeFiesta = time => {
    if (time >= 0 && time <2 || time > 2 && time < 7){
        let edad = prompt('!Bienvenido! , ¿Cual es tu edad? ');
        if (edad >= 18){
            alert('Puede pasar cancelando la entrada');
        }
        else{
            alert(`Su edad es ${edad} años , no puede ingresar`);
        }
    }
    else if (time==2){
        let edad = prompt('!Bienvenido! , ¿Cual es tu edad? ');
        if (edad >= 18){
            alert('!Puede pasar Gratis!');
        }
        else{
            alert(`Su edad es ${edad} años , no puede ingresar`);
        }
    }
    else{
        alert('Ya termino la actividad');
    }

}
entradaDeFiesta(0);
entradaDeFiesta(1);
entradaDeFiesta(2);
entradaDeFiesta(7);