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

class perroEx extends animal { // Herencia (atributos y metodos)
    constructor(especie,edad,color,raza){//Para heredar algunos atributos
        super(especie,edad,color); // Para heredar algunos atributos 
        this.tipoRaza = raza;
    }
   static ladrar(){ //Metodo Estatico
        document.write(`!Waw!`);
    }
}

// No se instancio el objeto perro 
const gato = new animal('gato',1,'negro');
const pajaro = new animal('pajaro',1,'verde');


gato.verInfo();
pajaro.verInfo();

perroEx.ladrar();//Podemos acceder al método directamente mediante la clase, usando static

