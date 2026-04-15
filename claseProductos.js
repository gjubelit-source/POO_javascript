//10. Clases de productos y personalCasos de productos con garantía

//Escriba un programa JavaScript que cree una clase llamada Producto con propiedades
//  para el ID, nombre y precio del producto.
// Incluir un método para calcular el precio total multiplicando el precio por la cantidad.
//  Cree una subclase llamada PersonalCareProduct que herede de la clase Product y agrega una
//  propiedad adicional para el período de garantía. 
// Anular el método de cálculo del precio total para incluir el período de garantía.//cree una instancia de la 
// clase PersonalCareProduct y calcule su precio total. 

class Producto{
    id;
    nombre;
    precio;

    constructor(id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;

    }
    calcular(cantidad){
      return  ` Id: ${this.id}, Nombre: ${this.nombre}, Precio : ${this.precio*cantidad}`
    }
    
}
class PersonalCareProduct extends Producto{
garantia;

constructor(id,nombre,precio,garantia){
    super(id,nombre,precio)
    this.garantia=garantia

}
calcular(cantidad){

    return`${super.calcular(cantidad)}, Garantia: ${this.garantia}`
}

}

let producto=new PersonalCareProduct( 52654,"mouse",12000,"10meses")
console.log(producto.calcular(2))