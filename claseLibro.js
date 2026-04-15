
//7. Clases de libro y libro electrónico con precio

//Escriba un programa JavaScript que cree una clase `Reservar` con propiedades para el título, autor y año de publicación.
// Incluya un método para mostrar los detalles del libro. Cree una subclase llamada 'Ebook' que herede de la clase 'Book' 
// e incluye una propiedad adicional por el precio de libro. /
//Anular el método de visualización para incluir el precio del libro. Cree una instancia de la clase 'Ebook' y muestre sus detalles. 

class Book {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }

    mostrarDetalles() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}`;
    }
}

class Ebook extends Book {
    constructor(titulo, autor, anio, precio) {
        super(titulo, autor, anio);
        this.precio = precio;
    }

    mostrarDetalles() {
        return `${super.mostrarDetalles()}, Precio: $${this.precio}`;
    }
}

let libro1 = new Ebook("cualquiera Básico", "Juan Pérez", 2023, 20);

console.log(libro1.mostrarDetalles());