
//6. Clases de Empleados y Gerentes con Cálculo de Salario

//Escriba un programa JavaScript que crea una clase llamada 'Employee' con propiedades para el nombre y el salario. 
//Incluir un método para calcular el salario anual. Cree una subclase llamada 'Administrador' que herede de la clase 'Empleado' 
//y agrega una propiedad adicional para el departamento. Anular el método de cálculo de salario anual para incluir bonos para los gerentes.
//Crear dos instancias de la clase 'Gerente' y calcular su salario anual. 

class Employee {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    salarioAnual() {
        return this.salario * 12;
    }
}

class Gerente extends Employee {
    constructor(nombre, salario, departamento, bono) {
        super(nombre, salario);
        this.departamento = departamento;
        this.bono = bono;
    }

    salarioAnual() {
        return (this.salario * 12) + this.bono;
    }
}

let gerente1 = new Gerente("Ana", 2000, "Ventas", 5000);
let gerente2 = new Gerente("Juan", 2500, "Marketing", 4000);

console.log(gerente1.nombre, "Salario anual:", gerente1.salarioAnual());
console.log(gerente2.nombre, "Salario anual:", gerente2.salarioAnual());