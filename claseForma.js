//5. Clases de forma, círculo y triángulo con cálculo de área

//Escriba un programa JavaScript que crea una clase llamada 'Shape' con un método para calcular el área.
//Cree dos subclases, 'Círculo' y 'Triángulo', que heredan de la clase 'Forma' y anulan el método de cálculo de área. 
//Crear una instancia de la clase 'Círculo' y calcular su área. Del mismo modo, haga lo mismo para la clase 'Triángulo'. 

class Shape {
    area() {
        return 0;
    }
}

class Circulo extends Shape {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}

class Triangulo extends Shape {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
}

let circulo = new Circulo(8);
let triangulo = new Triangulo(2, 3);

console.log("Área del círculo:", circulo.area());
console.log("Área del triángulo:", triangulo.area());