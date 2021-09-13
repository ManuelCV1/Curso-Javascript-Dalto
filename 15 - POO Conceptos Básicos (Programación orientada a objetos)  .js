class animal{ // Clase
    constructor(especie , edad , color) { //constructor 
/*Objeto*/this.especies = especie; /*Atributo*/
          this.age  = edad;
          this.color = color;
          this.info = `Hola soy ${this.especies}, tengo ${this.age} años y soy de color ${this.color} <br>`;
    }
    verInfo() {
        document.write(this.info); // Metodo
    }
}

const perro = new animal('perro','3','blanco'); //Instanciación
const gato = new animal('gato,',1,'negro');
const pajaro = new animal('pajaro',1,'verde');

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
