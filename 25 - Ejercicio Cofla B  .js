const registro = materia => {
    let materias = {
        fisica : ['Freddy','cofla','alejandra','sofia','gabriela'],
        matematica : ['Rico','sofia','cofla','carlos','gabriela'],
        quimica : ['Juan','carlos','sofia','gabriela','massiel'],
        geometria : ['Carlos','cofla','alejandra','kasandra','roberto']
    }
    if (materias[materia]){
        document.write(`<b>${materia}</b> <br>
        <b>Profesor:</b> ${materias[materia].shift()} <br>
        <b>Alumnos:</b> ${materias[materia]} <br> <br>`);
    }
    else if (materia==null){
        return materias;
    }
    else {
        document.write('Materia no encontrada');
    }
    }


registro('quimica');
registro('fisica');
registro('matematica');
registro('geometria');



let materias = registro();

const cuenta = (nombre) => {
    let cantidad = 0;
    let profesor;
    let clases = [];
    for (indice in materias){
        if(materias[indice].includes(nombre)==true){
            profesor = materias[indice][0];
            clases.push(indice+` (Prof.${profesor}) `);
            cantidad++;
        }
    }
    document.write(`<b>${nombre}</b> esta en ${cantidad} clases: ${clases}<br><br>`);
}

cuenta("cofla");
cuenta("kasandra");














