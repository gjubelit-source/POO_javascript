//9. Clase bancaria con gestión de sucursales

//Escriba un programa JavaScript que cree una clase llamada Banco con propiedades para nombres y sucursales de bancos
// Incluya métodos para agregar una rama, quitar una rama y mostrar todas las ramas.
// Crear una instancia de la clase Banco y realizar operaciones para añadir y eliminar sucursales. 

class Banco {
    constructor(nombre) {
        this.nombre = nombre;
        this.sucursales = [];
    }

    agregarSucursal(sucursal) {
        this.sucursales.push(sucursal);
    }

    quitarSucursal(sucursal) {
        this.sucursales = this.sucursales.filter(s => s !== sucursal);
    }

    mostrarSucursales() {
        return this.sucursales;
    }
}

let banco1 = new Banco("Banco Central");

banco1.agregarSucursal("Sucursal Norte");
banco1.agregarSucursal("Sucursal Sur");
banco1.agregarSucursal("Sucursal Centro");

banco1.quitarSucursal("Sucursal Sur");

console.log(banco1.mostrarSucursales());