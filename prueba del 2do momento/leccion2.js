'use strict'
function Estudiante(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
  
    
    this.validarPromedio = function () {
      return this.promedio > 70 ? "Aprobado" : "Reprobado";
    };
  
    
    this.obtenerUsuario = function () {
      
      const partesCorreo = this.correo.split("@");
      return partesCorreo[0];
    };
  }
  
  
  const estudiante1 = new Estudiante("Bryan Bonilla", "Bryan@example.com", 92);
  
  
  alert("Nombre: " + estudiante1.nombre);
  alert("Correo: " + estudiante1.correo);
  alert("Promedio: " + estudiante1.promedio);
  alert("Estado: " + estudiante1.validarPromedio());
  alert("Usuario: " + estudiante1.obtenerUsuario());
  