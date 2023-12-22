'use strict';

function Estudiante(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function () {
        if (this.promedio > 70) {
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    };

    this.obtenerUsuario = function () {
        const arrobaIndex = this.correo.indexOf("@");

        
        if (arrobaIndex !== -1) {
            
            const nombreUsuario = this.correo.substring(0, arrobaIndex);
            return nombreUsuario;
        } else {
            
            console.error("Correo electrónico no válido");
            return null; 
        }
    };
}

const estudiante1 = new Estudiante("Bryan Bonilla", "bgbonilla@sudamericano.edu.ec", 92);

alert("Nombre: " + estudiante1.nombre);
alert("Correo: " + estudiante1.correo);
alert("Promedio: " + estudiante1.promedio);
alert("Estado: " + estudiante1.validarPromedio());
alert("Usuario: " + estudiante1.obtenerUsuario());
