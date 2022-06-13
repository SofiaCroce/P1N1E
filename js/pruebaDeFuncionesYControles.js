
//  codigo de pruebas



// USUARIO PERSONA


// RESERVAS PENDIENTES
// Crear tabla de reservas pendientes por usuario
function completarTablaReservasPendientes() {
    let bodyHTML = '';
// recorro arreglo de reservas
        for (let i = 0; i < reservas.length; i++) {
            // nombre de los botones que se crearan en la tabla
            let textoBoton = 'Cancelar'
            // guardo la reserva de esta iteracion
            let reservaActual = reservas[i];
            // tomo su estado
            let estado = reservaActual.estado;
           
            // tomo su usario
            let usuarioReserva = reservaActual.usuarioID;
            // los valores de arriba podrian usarse directamente, 
            // pero los guardo en variables separadas
            // para identificarlos

    

//  si el estado es 1 "pendiente" y el id de usuario de la reserva es igual al id de usario logueado
//  creo la fila correspondiente en la tabla

            if(estado==1 && usuarioReserva == pruebaUsuarioActual.id){

             

                // creacion del html de la fila
                // sustitur imagen por url real
                bodyHTML += `
                <tr>
                    <td>
                    <img src="./img/logo.jpg" alt="logo">
                    </td>
                    <td>
                        ${buscarLocalPorID(reservaActual.localID).nombre}
                    </td>
                    <td>
                        ${reservaActual.cupos}
                    </td>
                    <td>
                    <input data-usuario="${reservaActual.id}" type="button" value="${textoBoton}" class="btnCancelarReserva">
                </td>
                </tr>
                `;
            }
           
        }
   
// Agrego el html generado e la tabla html
    document.querySelector("#bodyTablaReservasPendientes").innerHTML = bodyHTML;

// guardo todos los botones generados en un arreglo
    let arrayDeBotones = document.querySelectorAll(".btnCancelarReserva");

    // recorro el arreglo de botones generados
    for (let i = 0; i < arrayDeBotones.length; i++) {
        // guardo el boton actual en variable
        let botonActual = arrayDeBotones[i];
        // le agrego evento click al boton actual
        botonActual.addEventListener("click", btnCancelarReservaHandler);
    }
}


function btnCancelarReservaHandler() {
    // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
    // devuelve el id de la reserva
    let idDeReservaACancelar = this.getAttribute("data-usuario");

    //busco la reserva a cancelar
    let reservaACancelar = buscarReservaPorID(idDeReservaACancelar);

    
    // aplico el metodo cancelar en la reserva obtenida
    reservaACancelar.cancelarReserva();

// recargo la lista
    completarTablaReservasPendientes();
}

// funcion para reserva
function buscarReservaPorID(id){
    // si no encuentra devuelvo null
    let reserva = null;
    // recorro el arreglo de reservas
    for (let i = 0; i < reservas.length; i++) {
        // si el id por parametro es igual al id de la reserva de la iteracion 
        if(id ==reservas[i].id){
            // guardo el objeto reserva en la variable reserva
            reserva = reservas[i];
        } 
    }
    // devuevlo la reserva
    return reserva;
}

// funciones para local

// buscar local por id
function buscarLocalPorID(id){
    // si no encuentra devuelvo null
    let local = null;
    // recorro el arreglo de locales
    for (let i = 0; i < usuariosLocal.length; i++) {
        // si el id por parametro es igual al id del local de la iteracion 
        if(id ==usuariosLocal[i].id){
            // guardo el objeto local en la variable local
            local = usuariosLocal[i];
        } 
    }
    // devuevlo el local
    return local;
}





// //////////////////////////////////////////////////////////////////////


function completarTablaReservasSegunEstadoYUsuario(pEstado, pTipoUsuario){
    let bodyHTML = '';
    console.log('probando1');
    for (let i = 0; i < reservas.length; i++) {
        
        // guardo la reserva de esta iteracion
        let reservaActual = reservas[i];
        // tomo su estado
        let estadoReserva = reservaActual.estado;

        // tomo su usario
        let idUsuarioReserva = reservaActual.usuarioID;
        let idLocalReserva = reservaActual.localID;
        // los valores de arriba podrian usarse directamente, 
        // pero los guardo en variables separadas
        // para identificarlos



//  si el estado es 1 "pendiente" y el id de usuario de la reserva es igual al id de usario logueado
//  creo la fila correspondiente en la tabla

        if(estadoReserva == pEstado){

         
            if(pEstado==1 && pTipoUsuario==2 && idUsuarioReserva == pruebaUsuarioActual.id){
                // nombre de los botones que se crearan en la tabla
                let textoBoton = 'Cancelar'
        // creacion del html de la fila
                    // sustitur imagen por url real
                    bodyHTML += `
                    <tr>
                        <td>
                        <img src="./img/logo.jpg" alt="logo">
                        </td>
                        <td>
                            ${buscarLocalPorID(reservaActual.localID).nombre}
                        </td>
                        <td>
                            ${reservaActual.cupos}
                        </td>
                        <td>
                        <input data-usuario="${reservaActual.id}" type="button" value="${textoBoton}" class="btnCancelarReserva">
                    </td>
                    </tr>
                    `;
                    }
           
                if(pEstado==1 && pTipoUsuario==1 && idLocalReserva == pruebaUsuarioActual.id){
                        console.log('probando');
                        // nombre de los botones que se crearan en la tabla
                        let textoBoton = 'Finalizar'
                        // creacion del html de la fila
                                    // sustitur imagen por url real
                                    bodyHTML += `
                                    <tr>
                                        <td>
                                            ${buscarUsuarioPorID(usuariosPersona,reservaActual.usuarioID).nombre}
                                        </td>
                                        <td>
                                            ${reservaActual.cupos}
                                        </td>
                                        <td>
                                        <input data-usuario="${reservaActual.id}" type="button" value="${textoBoton}" class="btnFinalizarReserva">
                                    </td>
                                    </tr>
                                    `;
                        }
                    }
        }
       

  
    



    if(pEstado==1 && pTipoUsuario==2){
          
// Agrego el html generado e la tabla html
    document.querySelector("#bodyTablaReservasPendientes").innerHTML = bodyHTML;

    // guardo todos los botones generados en un arreglo
        let arrayDeBotones = document.querySelectorAll(".btnCancelarReserva");
    
        // recorro el arreglo de botones generados
        for (let i = 0; i < arrayDeBotones.length; i++) {
            // guardo el boton actual en variable
            let botonActual = arrayDeBotones[i];
            // le agrego evento click al boton actual
            botonActual.addEventListener("click", btnCancelarReservaHandler);
        }
    }


    if(pEstado==1 && pTipoUsuario==1){
          
        // Agrego el html generado e la tabla html
            document.querySelector("#bodyTablaReservasPendientesLocal").innerHTML = bodyHTML;
        
            // guardo todos los botones generados en un arreglo
                let arrayDeBotones = document.querySelectorAll(".btnFinalizarReserva");
            
                // recorro el arreglo de botones generados
                for (let i = 0; i < arrayDeBotones.length; i++) {
                    // guardo el boton actual en variable
                    let botonActual = arrayDeBotones[i];
                    // le agrego evento click al boton actual
                    botonActual.addEventListener("click", btnFinalizarReservaHandler);
                }
            }

}
    
function btnFinalizarReservaHandler(){
    console.log('finalizar');

      // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
    // devuelve el id de la reserva
    let idDeReservaACancelar = this.getAttribute("data-usuario");

    //busco la reserva a cancelar
    let reservaACancelar = buscarReservaPorID(idDeReservaACancelar);

    
    // aplico el metodo cancelar en la reserva obtenida
    reservaACancelar.finalizarReserva();

// recargo la lista
    completarTablaReservasSegunEstadoYUsuario(1,pruebaUsuarioActual.tipoUsuarioId);
}