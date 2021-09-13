class celular{
    constructor(marca,color,peso,resolucionPantalla,resolucionCamara,memoriaRam){
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.encenderMovil = false;
        this.reiniciarMovil = false;
        this.apagarMovil = false;
        this.tomarFotosMovil = false;
        this.grabarMovil = false;
        this.info = `El telefono ${this.marca} es de color ${this.color}, tiene un peso de ${this.peso}, una resolucion de patalla de ${this.resolucionPantalla}, una resolucion de camara de ${this.resolucionCamara} y una memoria Ram de ${this.memoriaRam} <br>`
    }
    encender(){
        if (this.encenderMovil == false){
            alert(`!${this.marca} encendido!`);
            this.encenderMovil = true;
        }
        else{
            alert(`${this.marca} ya esta encendido`);
        }
    }
    reiniciar(){
        if (this.reiniciarMovil == false){
            alert(`${this.marca} se a reiniciado`);
            this.reiniciarMovil = true;
        }
        else{
            alert(`${this.marca} ya se reinicio`);
        }
    }
    apagar(){
        if (this.apagarMovil == false){
            alert(`${this.marca} se ha apagado`);
            this.apagarMovil = true;
        }
        else{
            alert(`${this.marca} ya se apago`);
        }
    }
    tomarFotos(){
        if (this.tomarFotosMovil == false){
            alert(`!${this.marca} esta tomando fotos!`);
            this.tomarFotosMovil = true;
        }
        else{
            alert(`${this.marca} ya tomo fotos`);
        }
    }
    grabar(){
        if (this.grabarMovil == false){
            alert(`${this.marca} esta grabando`);
            this.grabarMovil = true;
        }
        else{
            alert(`${this.marca} ya grabo`);
        }
    }

}

class celularGammaAlta extends celular{
    constructor(marca,color,peso,resolucionPantalla,resolucionCamara,memoriaRam){
        super(marca,color,peso,resolucionPantalla,resolucionCamara,memoriaRam);
    }
    camaraLenta(){
        alert(`${this.marca} Esta grabando en camara Super Lenta`);
    }
    reconocimientoFacial(){
        alert(`Reconocimiento facial de ${this.marca} activado`);
    }
    camaraExtra(){
        alert(`Camara Extra de ${this.marca} encendida`);
    }

}

const samsumJ2 = new celular('samsumJ2','Gris','200gr','300x200','4Mpx','2Gb');
const redmi9 = new celular('redmi9','Azul','200gr','400x200','8Mpx','4Gb');
const redmi10 = new celular('redmi10','violeta','300gr','400x200','12Mpx','6Gb');
const iphone12 = new celularGammaAlta('iphone12','blanco','150gr','300x200','12Mpx','8Gb');

document.write(samsumJ2.info);
document.write(redmi9.info);
document.write(redmi10.info);
document.write(iphone12.info);

redmi9.encender();
redmi9.reiniciar();
redmi9.apagar();
redmi9.tomarFotos();
redmi9.grabar();

iphone12.camaraLenta();
iphone12.reconocimientoFacial();
iphone12.camaraExtra();