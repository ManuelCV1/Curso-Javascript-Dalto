let materias = {
    fisica:['jose','carlos','alberto','javier','roberto','rigoberto','esperanza','joel','gabriel','maria'],
    quimica:['carlos','alberto','javier','roberto','rigoberto','esperanza','joel','gabriel'],
    matematica:['carlos','alberto','javier','roberto','rigoberto','esperanza','joel','gabriel','adalberto','ronny']
}

const registro = (nombre,materia) => {
    let eleccion = materias[materia];
    if (eleccion.length >= 10){
        document.write(`No te puedes inscribir, la clase esta llena<br>`);  
        }
        else if (eleccion.length < 10){
            document.write(`<br>!Inscrito en <b>${materia}</b> correctamente!<br>`)
            materias[materia].push(nombre);
            document.write(`Nueva lista de la materia:<br>
            ${materias[materia]}<br>`);    
        }
        else{
            document.write('Materia no encontrada');
        }
    }
 

registro('cofla','quimica');
registro('kiko','quimica');
registro('juancho','quimica');
registro('rigoberto','quimica');
registro('cabrera','quimica');
registro('roger','quimica');


