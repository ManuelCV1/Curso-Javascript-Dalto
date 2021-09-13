let cantidad = prompt('¿Cuantos Alumnos hay?');
let alumnos = [];

for (i = 0 ; i < cantidad ; i++){
    alumnos[i] = [prompt(`Alumno ${i + 1}`),0];
}


for (i=0 ; i<30;i++){
    for (alumno in alumnos ){
        let asistencia = prompt(`Día ${i + 1} ¿${alumnos[alumno][0]} esta presente (P)?`);
        if (asistencia == 'p' || asistencia == 'P'){
            alumnos[alumno][1]++;
        }
    }
}

for (alumno in alumnos){
    document.write(`${alumnos[alumno][0]} Tiene ${alumnos[alumno][1]} asistencias y ${30 - alumnos[alumno][1]} inasistencias <br>`)
    if ( (30 - alumnos[alumno][1]) >= 18){
        document.write(`Debido a la cantidad de inasistencias (más del 18%) ${alumnos[alumno][0]} reprueba la asignatura <br>`);
    }
}