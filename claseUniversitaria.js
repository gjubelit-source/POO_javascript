//12. Clase universitaria con gestión de departamento

//Escriba un programa JavaScript que cree una clase llamada Universidad con propiedades para el nombre y los departamentos universitarios.
// Incluya métodos para agregar un departamento, eliminar un departamento y mostrar todos los departamentos. 
//crear una instancia de la clase de la Universidad y añadir y eliminar departamentos. 

class Universidad {
  constructor(nombre) {
    this.nombre = nombre;
    this.departamentos = [];
  }

  agregarDepartamento(departamento) {
    this.departamentos.push(departamento);
    console.log(`Departamento "${departamento}" agregado.`);
  }

  eliminarDepartamento(departamento) {
    const index = this.departamentos.indexOf(departamento);

    if (index !== -1) {
      this.departamentos.splice(index, 1);
      console.log(`Departamento "${departamento}" se  eliminado.`);
    } else {
      console.log(`El departamento "${departamento}"ya  no existe.`);
    }
  }

  mostrarDepartamentos() {
    console.log(`Departamentos de la ${this.nombre}:`);
    this.departamentos.forEach(dep => {
      console.log(`- ${dep}`);
    });
  }
}

const uni = new Universidad("Universidad del cauca");

uni.agregarDepartamento("Ingeniería");
uni.agregarDepartamento("Ciberseguridad");
uni.agregarDepartamento("Ingenieria en analitica de datos");

uni.mostrarDepartamentos();

uni.eliminarDepartamento("ciberseguridad");

uni.mostrarDepartamentos();