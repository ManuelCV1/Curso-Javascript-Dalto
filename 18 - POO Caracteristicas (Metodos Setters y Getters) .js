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
        this.tipoRaza = null;
    }
    set setModificarRaza(newName){// Metodo Set 
        this.tipoRaza = newName;
    }
    ladrar(){
        document.write(`!${this.tipoRaza} ladra! : <br>`);
    }
    get getTipoRaza (){ // Meto Get
        return this.tipoRaza;
    }
}

const perro = new perroEx('perro',3,'blanco','Poodle'); //Instanciación
const gato = new animal('gato',1,'negro');
const pajaro = new animal('pajaro',1,'verde');

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

perro.setModificarRaza = 'doberman'; // Para modificar/establecer un valor mediante Set

perro.ladrar();

document.write(`!Soy un ${perro.getTipoRaza}!`); // Podemos usar get para obtener un valor o resultado





