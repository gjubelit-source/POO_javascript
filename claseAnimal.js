//8. Clases de animales y perros con sonido

//Escriba un programa JavaScript que cree una clase llamada 'Animal' con propiedades para especies y sonido. 
//Incluya un método para hacer el sonido del animal. Cree una subclase llamada 'Perro' que herede de la clase 'Animal' 
// //y agrega una propiedad adicional para el color. 
//Anular el método de hacer sonido para incluir el color del perro. Cree una instancia de la clase 'Perro' y haga que haga su sonido. 

class Animal {
    constructor(especie, sonido) {
        this.especie = especie;
        this.sonido = sonido;
    }

    hacerSonido() {
        return `El ${this.especie} hace: ${this.sonido}`;
    }
}

class Perro extends Animal {
    constructor(especie, sonido, color) {
        super(especie, sonido);
        this.color = color;
    }

    hacerSonido() {
        return `El perro de color ${this.color} hace: ${this.sonido}`;
    }
}

let perro1 = new Perro("Perro", "Guau", "negro");

console.log(perro1.hacerSonido());