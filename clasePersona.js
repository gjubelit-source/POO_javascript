//1. Clase de persona con detalles
//Escriba un programa JavaScript para crear una clase llamada "Person" 
// con propiedades para nombre, edad y país. Incluya un método para mostrar 
//los detalles de la persona. Cree dos instancias de la clase 'Persona' y muestre sus detalles. 

 class Person {
    nombre;
    edad;
    pais;

    constructor(nombre,edad,pais){
        this.nombre=nombre;
        this.edad=edad;
        this.pais=pais;
    }
   

    informacion(){
        return `Nombre ${this.nombre} ,Edad ${this.edad}, Pais ${this.pais}`
    }
 }
 let persona1=new Person("Jubelit",18,"colombia")
 console.log(persona1.informacion())

 let persona2=new Person("Smith ",25,"Colombia")
 console.log(persona2.informacion())