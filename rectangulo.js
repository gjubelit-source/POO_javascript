//2. Clase de rectángulo con área y perímetro
//Escriba un programa JavaScript para crear una clase llamada 'Rectángulo' con propiedades de ancho y altura.
//  Incluya dos métodos para calcular el área del rectángulo y el 
//perímetro. Crear una instancia de la clase 'Rectángulo' y calcular su área y perímetro

class Rectangulo {
    ancho;
    altura;
    constructor(valor1,valor2){
        this.ancho=valor1;
        this.altura=valor2;
    }
    calcularArea(){
let resultadoArea=this.ancho*this.altura
return resultadoArea
    }
calcularPerimetro(){
    let resultadoPerimetro=2*(this.ancho+this.altura)
    return resultadoPerimetro
}
}
let rectangulito =new Rectangulo (20,30)
console.log(rectangulito.calcularArea())
console.log(rectangulito.calcularPerimetro())