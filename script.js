// Se eliminó comentario con información sensible

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
//Se eliminó variable API_KEY que no se utiliza en el código
//Se eliminó conexión con la base de datos que no se utiliza en el código

// Se eliminó configuración que no se utiliza en el código

//Se eliminó información sensible de la base de datos y api expuesta en consola

// Función principal de inicialización
function inicializar() {
    console.log("Inicializando sistema de registro...");
    //Se eliminó log de credenciales expuestas
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;

    //Se eliminó log con datos capturados que tenína información sensible
    
    //Se agregaron validaciones adicionales
    if (nombre == "" || apellido1 == "" || telefono == "" || curp == "" || email == "") {
        alert("Error al registrar usuario. Todos los campos son obligatorios.");
        return;
    }

    if(!nombre.match(/^[a-zA-Z\s]+$/)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    if(!telefono.match(/^\d{10}$/)) {
        alert("El teléfono debe contener exactamente 10 dígitos numéricos.");
        return;
    }

    if(!curp.match(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/)) {
        alert("CURP inválida. Debe seguir el formato correcto.");
        return;
    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Correo electrónico inválido.");
        return;
    }
    
    /* Se eliminó validación que ya no se utiliza */
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        // Se eliminó el almacenamiento de la API_KEY en cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    //Se eliminó log que exponía el id del registro
    //Se eliminó log con datos sensibles expuestos
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //Se eliminó log que exponía los datos de todos los registros incluyendo el id
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //Se eliminó log con datos sensibles expuestos
    
    // Se eliminó llamada a la función que simulaba enviar datos a un servidor
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción segura de elementos DOM en lugar de innerHTML
    var nuevaFila = document.createElement('tr');
    
    var tdNombre = document.createElement('td');
    tdNombre.textContent = registro.nombreCompleto;
    nuevaFila.appendChild(tdNombre);
    
    var tdTelefono = document.createElement('td');
    tdTelefono.textContent = registro.telefono;
    nuevaFila.appendChild(tdTelefono);
    
    var tdCurp = document.createElement('td');
    tdCurp.textContent = registro.curp;
    nuevaFila.appendChild(tdCurp);
    
    var tdEmail = document.createElement('td');
    tdEmail.textContent = registro.email;
    nuevaFila.appendChild(tdEmail);
    
    // Insertar la fila en la tabla de forma segura
    tabla.appendChild(nuevaFila);
}

// FSe eliminó función que simulanba enviar datos a un servidor

/* Se eliminaron funciones comentadas que ya no se utilizan */

// Se eliminó función que expone datos sensibles en consola y su llamada

// Se eliminó código antiguo comentado

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    // Se eliminó información sensible expuesta en consola
});

// Se eliminó función comentada que ya no se utiliza

console.log("Script cargado completamente");
//Se eliminó información sensible expuesta
