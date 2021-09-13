const datos = {
    fisica: [90,9,4],
    quimica: [87,6,3],
    matematica: [98,8,4],
    algebra: [100,7,4]
}

const asistencia = (materia) =>{
    if (datos[materia][0]>=90 && datos[materia][1]>=7 && datos[materia][2]>=3  ){
        document.write(`Usted a aprobado <b>${materia}</b><br><br>`);
        console.log(`%cUsted a aprobado ${materia}`,"color:blue;background:yellow;padding:20px");
    }
    else{
        document.write(`Usted a reprobado <b>${materia}</b><br><br>`);
        console.log(`%cUsted a reprobado ${materia}`,"color:blue;background:red;padding:20px");
    }
}

asistencia('fisica');
asistencia('quimica');
asistencia('matematica');
asistencia('algebra');