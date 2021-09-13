class app {
    constructor(nroApp,descargas,puntuacion,peso){
        this.nroApp = nroApp;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalado = false;
        this.abierto = false;
    }
    info(){
        document.write(`<b>${this.nroApp}</b>:<br>
        Descargas: ${this.descargas}<br>
        Puntuación: ${this.puntuacion}<br>
        Peso: ${this.peso}<br><br>
        `);
    }
    instalar(){
        if(this.instalado==false){
            alert(`Instalando ${this.nroApp}`);
            this.instalado=true;
        }
    }
    abrir(){
        if(this.abierto==false && this.instalado==true){
            alert(`Abriendo ${this.nroApp}`);
            this.abierto=true;
        }
    }
    cerrar(){
        if(this.abierto==true && this.instalado==true){
            alert(`Cerrando ${this.nroApp}`);
            this.abierto=false;
        }
    }
    desinstalando(){
        if(this.instalado==true){
            alert(`Desinstalando ${this.nroApp}`);
            this.instalado=false;
        }
    }
}

const app1 = new app('App1','200K','9.1','300Mb');
const app2 = new app('App2','400K','9.5','250Mb');

app1.info();
app2.info();

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalando();


