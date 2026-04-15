//Clases de Vehículos y Autos con Herencia

//Escriba un programa JavaScript que crea una clase llamada 'Vehículo' con propiedades para marca, modelo y año.
//Incluir un método para mostrar los detalles del vehículo. Cree una subclase llamada 'Coche' que herede de la clase 'Vehículo' 
// e incluye una propiedad adicional para el número de puertas. 
//Anular el método de visualización para incluir el número de puertas

class Vehiculo{ 
marca;
modelo;
año;
constructor(marca,modelo,año){
this.marca=marca;
this.modelo=modelo;
this.año=año;
}
mostrar(){
    return ` La marca de su vehiculo es: ${this.marca},Modelo: ${this.modelo},Año: ${this.año}`}
}

class Coche extends Vehiculo{
    constructor(marca,modelo,año,puertas){
        super (marca,modelo,año)
        this.puertas=puertas;
    }
    mostrar(){
  return super.mostrar() + `, Puertas: ${this.puertas}`;

    }
}

let superCarro =new Vehiculo( "BMW",2026,2027,2)
console.log(superCarro.mostrar());    

let otrico= new Coche("Jeep",2000,2027,5)
console.log(otrico.mostrar())