// let usuarioLocal1 =  new UsuarioLocal('Leonardo','leo1224',"por ahi",30,"foto.jpg",2);
// usuarioLocal1.dehabilitarLocal();

// -------------------------------------------------
//              VARIABLES GLOBALES Y DATOS
// -------------------------------------------------
//prueba
//Harcodeo el usuario que logeo para mostrar la pantalla, hay que cambiarlo luego
// 2 usuario persoa
// 1 local 


let tipoDeUsuarioLogueado = 1;
let usuarioEstaLogueado = false;
let usuarioLogueado = {};


let tiposDeUsuario = [];
let tiposDeLocal = [];
let tipoEstadoDeReserva = [];

let usuariosLocal = [];
let usuariosPersona = [];

let reservas = [];

// -------------------------------------------------
//             Inicio del programa
// -------------------------------------------------

inicializar();

function inicializar() {
    mostrarHome();

    // actualizarMenuPorTipoDeUsuario();
    cargarClickEnBotones();
    cargarEventosEnSelect();
    precargarDatos();
}

// -------------------------------------------------
//              CARGA DE DATOS
// -------------------------------------------------

function precargarDatos() {
    precargaDeOpciones();
    precargaDeUsuarios();
    precargarReservas();
}


// -------------------------------------------------
//              Carga de opciones
// -------------------------------------------------

function precargaDeOpciones() {
    precargarTiposDeUsuarios();
    precargarTipoLocal();
    precargarTipoEstadoDeReserva();
}


//              Carga de tipos de usuarios
// -------------------------------------------------
function precargarTiposDeUsuarios() {
    tiposDeUsuario.push(new TipoUsuario("Local")); // id 1
    tiposDeUsuario.push(new TipoUsuario("Persona")); // id 2
}
//              Carga de tipos de locales
// -------------------------------------------------
function precargarTipoLocal() {
    tiposDeLocal.push(new TipoLocal("Restaurante")); // id 1
    tiposDeLocal.push(new TipoLocal("Museo")); // id 2
    tiposDeLocal.push(new TipoLocal("Teatro")); // id 3
}
//              Carga de tipos de estado de reservas
// -------------------------------------------------
function precargarTipoEstadoDeReserva() {
    tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Pendiente")); // id 1
    tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Finalizada")); // id 2
    tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Cancelada")); // id 3
}


// -------------------------------------------------
//              Carga de objetos
// -------------------------------------------------
function precargaDeUsuarios() {
    precargarUsuarioLocal();
    precargarUsuarioPersona();
}

//              Carga de usuarios Local
// -------------------------------------------------
function precargarUsuarioLocal() {
    //nombre de usuario, password, nombre, direccion, cupos maximos, foto, tipo de local
    usuariosLocal.push(new UsuarioLocal('Usuario1', 'Paponita123', 'La Paponita', "direccion 1", 30, "foto1.jpg", 1)); // id 1
    usuariosLocal.push(new UsuarioLocal('Usuario2', 'Pasiva123', 'La Pasiva', "direccion 2", 55, "foto2.jpg", 1)); // id 2
    usuariosLocal.push(new UsuarioLocal('Usuario3', 'Gaspacho123', 'Gaspacho', "direccion 3", 200, "foto3.jpg", 1)); // id 3
    usuariosLocal.push(new UsuarioLocal('Usuario4', 'Louvre123', 'Louvre', "direccion 4", 40, "foto4.jpg", 2)); // id 4
    usuariosLocal.push(new UsuarioLocal('Usuario5', 'MHN123', 'Museo de historia natural', "direccion 5", 350, "foto5.jpg", 2)); // id 5
    usuariosLocal.push(new UsuarioLocal('Usuario6', 'Galpon123', 'El Galpon', "direccion 6", 120, "foto6.jpg", 3)); // id 6
    usuariosLocal.push(new UsuarioLocal('Usuario7', 'Solis123', 'Teatro Solis', "direccion 7", 234, "foto7.jpg", 3)); // id 7

}


//              Carga de usuarios persona
// -------------------------------------------------
function precargarUsuarioPersona() {
    // nombre de usuario, password, nombre

    usuariosPersona.push(new UsuarioPersona("Usuario8", "Juan1234", "Juan")); // id 8
    usuariosPersona.push(new UsuarioPersona("Usuario9", "Mario1234", "Mario")); // id 9
    usuariosPersona.push(new UsuarioPersona("Usuario10", "Pedro1234", "Pedro")); // id 10
    usuariosPersona.push(new UsuarioPersona("Usuario11", "Ana1234", "Ana")); // id 11
    usuariosPersona.push(new UsuarioPersona("Usuario12", "Lucia1234", "Lucia")); // id 12
    usuariosPersona.push(new UsuarioPersona("Usuario13", "Franco1234", "Franco")); // id 13
    usuariosPersona.push(new UsuarioPersona("Usuario14", "Jose1234", "Jose")); // id 14

}

// -------------------------------------------------
//              Carga de Reservas
// -------------------------------------------------
function precargarReservas() {
    //usuario, local, cupos

    // reservas pendientes
    reservas.push(new Reserva(8, 1, 11)); // id 1
    reservas.push(new Reserva(9, 2, 5)); // id 2
    reservas.push(new Reserva(10, 3, 10)); // id 3
    reservas.push(new Reserva(11, 4, 3)); // id 4
    reservas.push(new Reserva(12, 6, 7)); // id 5


    // reserva finalizadas
    reservas.push(new Reserva(11, 5, 5)); // id 6
    reservas[5].finalizarReserva();
    reservas.push(new Reserva(12, 7, 15)); // id 7
    reservas[6].finalizarReserva();

    // reserva canceladas
    reservas.push(new Reserva(8, 2, 7)); // id 8
    reservas[7].cancelarReserva();


}
//  borrar usuario persona cuando se programe el login
// es solo para setear datos de un supuesto usaurio logueado
//let usuarioLogueado = usuariosLocal[1];
// let usuarioLogueado = usuariosPersona[3];


// -------------------------------------------------
//             Manejo De botones
// -------------------------------------------------

function cargarClickEnBotones() {
    // Menu
    document.querySelector("#btnMenuLogin").addEventListener("click", btnMenuLoginHandler);
    document.querySelector("#btnMenuRegistro").addEventListener("click", btnMenuRegistroHandler);
    document.querySelector("#btnMenuHome").addEventListener("click", btnMenuHomeHandler);

    document.querySelector("#btnMenuCerrarSesion").addEventListener("click", btnMenuCerrarSesionHandler);

    //REGISTRO 
    document.querySelector("#btnRegistrarse").addEventListener("click", btnRegistrarseHandler);

    // LOGIN
    document.querySelector("#btnLoginIngresar").addEventListener("click", btnLoginIngresarHandler);
    // Persona
    // --------------------
    // Reservar
    document.querySelector("#btnReservarPersonaMenu").addEventListener("click", btnReservarPersonaMenuHandler);
    // Estadistica
    document.querySelector("#btnEstadisticasPersonaMenu").addEventListener("click", btnEstadisticasPersonaMenuHandler);
    // reservas pendientes
    document.querySelector("#btnReservasPendientesPersonaMenu").addEventListener("click", btnReservasPendientesPersonaMenuHandler);
    // reservas finalizadas
    document.querySelector("#btnReservasFinalizadasPersonaMenu").addEventListener("click", btnReservasFinalizadasPersonaMenuHandler);

    // Local
    // --------------------

    // Estadistica
    document.querySelector("#btnEstadisticasLocalMenu").addEventListener("click", btnEstadisticasLocalMenuHandler);
    // Administrar Reservas
    document.querySelector("#btnAdministrarReservasLocalMenu").addEventListener("click", btnAdministrarReservasLocalMenuHandler);
    //Administrar local
    document.querySelector("#btnAdministrarLocalMenu").addEventListener("click", btnAdministrarLocalMenuHandler);
    document.querySelector("#btnBuscarReservasEnLocal").addEventListener("click", btnBuscarReservasEnLocalHandler);

    document.querySelector("#btnModificarCupoMaximo").addEventListener("click", btnModificarCupoMaximoHandler);

}

// -------------------------------------------------
//             Manejo de Select
// -------------------------------------------------

function cargarEventosEnSelect() {
    document.querySelector('#habilitarDisponibilidad').addEventListener('change', selectHabilitarDisponibilidadHandler);
}

// -------------------------------------------------
//             Eventos De botones Menu
// -------------------------------------------------

function btnMenuLoginHandler() {
    mostrarLogin();
    // usuario harcodeado
    // local
    // document.querySelector('#txtLoginUsuario').value = "Usuario1"
    // document.querySelector('#txtLoginPassword').value = "Paponita123"
    //  persona
    document.querySelector('#txtLoginUsuario').value = "Usuario8"
    document.querySelector('#txtLoginPassword').value = "Juan1234"
}

function btnMenuHomeHandler() {
    mostrarHome();
}

function btnMenuRegistroHandler() {
    mostrarRegistro();
}

function btnMenuCerrarSesionHandler() {
    usuarioEstaLogueado = false;
    usuarioLogueado = null;
    mostrarHome();
}

// -------------------------------------------------
//             Manejo De Pantallas
// -------------------------------------------------
function mostrarLogin() {

    ocultarPantallas();
    document.querySelector("#divLogin").style.display = "block";
}

function mostrarRegistro() {

    ocultarPantallas();
    document.querySelector("#divRegistro").style.display = "block";
}

function mostrarHome() {

    ocultarPantallas();
    document.querySelector("#divHome").style.display = "block";
}

// LOGIN

function mostrarPantallaLocalLogueado() {
    ocultarPantallas();
    // mostrar opciones
    document.querySelector("#cabezalLocal").style.display = "block";
    // mostrar contenido
    btnAdministrarReservasLocalMenuHandler();
    // document.querySelector("#adminReserva").style.display = "block";
    // mostrar botones
    document.querySelector("#btnMenuCerrarSesion").style.display = "block";


}

function mostrarPantallaPersonaLogueada() {
    ocultarPantallas();
    // mostrar opciones
    document.querySelector("#cabezalPersona").style.display = "block";
    // mostrar contenido
    btnReservasPendientesPersonaMenuHandler();
    // document.querySelector("#reservasPendientes").style.display = "block";

    // mostrar botones
    document.querySelector("#btnMenuCerrarSesion").style.display = "block";

}

// Menu persona
// -------------------------------
// Estadistica
function btnEstadisticasPersonaMenuHandler() {
    ocultarPantallas();
    document.querySelector("#cabezalPersona").style.display = "block";
    document.querySelector("#infoEstadistica").style.display = "block";
    document.querySelector("#infoEstadisticaPersona").style.display = "block";
    listadoDePromedioDeCalificacionesDeLocales();
}
// Reservar
function btnReservarPersonaMenuHandler() {
    ocultarPantallas();
    generarTablaReservas();
    document.querySelector("#cabezalPersona").style.display = "block";
    document.querySelector("#realizarReserva").style.display = "block";

}
// reservas pendientes

// creo la tabla de reservas
// completarTablaReservasPendientes();
// completarTablaReservasSegunEstadoYUsuario(1,usuarioLogueado.tipoUsuarioId);

function btnReservasPendientesPersonaMenuHandler() {
    ocultarPantallas();
    completarTablaReservasSegunEstadoYUsuario(1, usuarioLogueado.tipoUsuarioId);
    document.querySelector("#reservasPendientes").style.display = "block";
    document.querySelector("#cabezalPersona").style.display = "block";
}

// reservas Finaliadas
function btnReservasFinalizadasPersonaMenuHandler() {
    ocultarPantallas();
    completarTablaReservasSegunEstadoYUsuario(2, usuarioLogueado.tipoUsuarioId);
    document.querySelector("#cabezalPersona").style.display = "block";
    document.querySelector("#reservasFinalizadas").style.display = "block";

}


// Menu Local
// -------------------------------



function btnEstadisticasLocalMenuHandler() {
    ocultarPantallas();
    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#infoEstadistica").style.display = "block";
    document.querySelector("#infoEstadisticaLocal").style.display = "block";
}
function btnAdministrarReservasLocalMenuHandler() {
    ocultarPantallas();
    completarTablaReservasSegunEstadoYUsuario(1, usuarioLogueado.tipoUsuarioId);
    // console.log(usuarioLogueado.tipoUsuarioId);
    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#adminReserva").style.display = "block";

}
function btnAdministrarLocalMenuHandler() {
    ocultarPantallas();

    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#administrarLocal").style.display = "block";

    document.querySelector('#txtCupoMaximo').value = usuarioLogueado.cupoMaximo;

}
// ---------------------------------------------------------------------------
function ocultarPantallas() {
    vaciarCampos();

    // PERSONA
    // Menu
    document.querySelector("#cabezalPersona").style.display = "none";
    // estadisticas
    document.querySelector("#infoEstadisticaPersona").style.display = "none";
    // reservar
    document.querySelector('#verDatosLocalAReservar').style.display = 'none';
    document.querySelector("#realizarReserva").style.display = "none";
    // reservas finalizadas
    document.querySelector("#reservasFinalizadas").style.display = "none";
    // reservas pendientes
    document.querySelector("#reservasPendientes").style.display = "none";

    //LOCAL
    document.querySelector("#cabezalLocal").style.display = "none";
    // estadisticas
    document.querySelector("#infoEstadisticaLocal").style.display = "none";
    // administrar local
    document.querySelector("#administrarLocal").style.display = "none";
    generarSelectDinamicoHabilitarLocal();


    //
    document.querySelector("#infoEstadistica").style.display = "none";

    document.querySelector("#adminReserva").style.display = "none";

    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divHome").style.display = "none";
    document.querySelector("#divRegistro").style.display = "none";


    // botones ocultos
    if (usuarioEstaLogueado) {
        document.querySelector("#btnMenuCerrarSesion").style.display = "block";
        document.querySelector("#btnMenuLogin").style.display = "none";
        document.querySelector("#btnMenuRegistro").style.display = "none";
    } else {
        document.querySelector("#btnMenuCerrarSesion").style.display = "none";
        document.querySelector("#btnMenuLogin").style.display = "block";
        document.querySelector("#btnMenuRegistro").style.display = "block";
    }

}

// -------------------------------------------------
//             Manejo De Campos
// -------------------------------------------------

function vaciarCampos() {
    document.querySelector("#txtLoginUsuario").value = "";
    document.querySelector("#txtLoginPassword").value = "";
    document.querySelector("#txtRegistroUsuario").value = "";
    document.querySelector("#txtRegistroPassword").value = "";
    document.querySelector("#txtRegistroNombre").value = "";

}

// -------------------------------------------------
//             Funciones Globales
// -------------------------------------------------

function cuposDisponibles(pIdDeLocal) {
    let cuposMaximo = 0;
    let cuposUsados = 0;
    for (let i = 0; i < usuariosLocal.length; i++) {
        if (usuariosLocal[i].id == pIdDeLocal) {
            cuposMaximo = usuariosLocal[i].cupoMaximo;
        }
    }

    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].localID == pIdDeLocal && reservas[i].estado == 1) {
            cuposUsados += reservas[i].cupos;
        }
    }

    return cuposMaximo - cuposUsados;
}

function buscarLocalPorID(id) {
    // si no encuentra devuelvo null
    let local = null;
    // recorro el arreglo de locales
    for (let i = 0; i < usuariosLocal.length; i++) {
        // si el id por parametro es igual al id del local de la iteracion 
        if (id == usuariosLocal[i].id) {
            // guardo el objeto local en la variable local
            local = usuariosLocal[i];
        }
    }
    // devuevlo el local
    return local;
}


function obtenerTipoDeLocalPorId(idTipo) {
    let tipo = "";
    for (let i = 0; i < tiposDeLocal.length; i++) {
        if (tiposDeLocal[i].id == idTipo) {
            tipo = tiposDeLocal[i].nombre;
        }
    }
    return tipo;
}

function buscarUsuarioPorNombre(arreglo, nombreUsuario) {
    let resultado = null;
    let i = 0;
    while (resultado == null && i < arreglo.length) {
        let usuarioActual = arreglo[i];
        if (usuarioActual.nombreUsuario.toLowerCase() == nombreUsuario.toLowerCase()) {
            resultado = usuarioActual;
        }
        i++;
    }
    return resultado;
}


function buscarUsuarioPorID(arreglo, idUsuario) {
    let resultado = null;
    let i = 0;
    //se busca dentro de cada arreglo de usuarios, que coincida el nombre de usuario
    while (resultado == null && i < arreglo.length) {
        let usuarioActual = arreglo[i];

        if (usuarioActual.id == idUsuario) {

            resultado = usuarioActual;
        }
        i++;
    }
    return resultado;
}

function validarNombre(nombre) {
    let tieneAlMenosDosCaracteres = nombre.length >= 2;
    let tieneNumeros = false;

    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i])) {
            tieneNumeros = true;
        }
    }

    if (tieneAlMenosDosCaracteres && !tieneNumeros) {
        return true;
    } else { return false; }
}

function validarPassword(pass) {
    let tieneSeisCaracteres = pass.length >= 6;
    let tieneMayus = false;
    let tieneMinus = false;
    let tieneNumeros = false;


    for (let i = 0; i < pass.length; i++) {
        let codigo = pass[i].charCodeAt();

        if (codigo >= 65 && codigo <= 90) {
            tieneMayus = true;
        }

        if (codigo >= 97 && codigo <= 122) {
            tieneMinus = true;
        }

        if (!isNaN(pass[i])) {
            tieneNumeros = true;
        }

    }

    if (!tieneSeisCaracteres) {
        return { id: 1, msj: "debe tener al menos 6 caracteres" };
    } else if (!tieneMayus) {
        return { id: 2, msj: "debe tener al menos una mayus" };
    } else if (!tieneMinus) {
        return { id: 3, msj: "debe tener al menos una minus" };
    } else if (!tieneNumeros) {
        return { id: 3, msj: "debe tener al menos un num" };
    } else {
        return { id: 0, msj: "pass correcto" };
    }

}


// -------------------------------------------------
//             Registro de Usuario Persona
// -------------------------------------------------


// funcion del evento del boton para registrar un usuario Persona
function btnRegistrarseHandler() {
    let mensaje = "";
    let mensajePassword = "La contraseña deberá tener al menos 6 caracteres, una mayúscula, una minúscula y un número";
    const usuarioIngresado = document.querySelector("#txtRegistroUsuario").value;
    const passwordIngresado = document.querySelector("#txtRegistroPassword").value;
    const nombreIngresado = document.querySelector("#txtRegistroNombre").value;


    if (usuarioIngresado !== "" && passwordIngresado !== "" && nombreIngresado !== "") {
        //condicional para validar si el nombre de usuario coincide con uno ya creado previamente
        if (!existeUsuario(usuarioIngresado)) {
            let retorno = validarPassword(passwordIngresado);
            if (retorno.id == 0) {
                let nombreEsValido = validarNombre(nombreIngresado);
                if (nombreEsValido == true) {
                    //si no existe un usuario persona o local con el mismo nombre, creamos un nuevo usuario con el nombre y contraseña ingresados
                    registrarUsuarioPersona(usuarioIngresado, passwordIngresado, nombreIngresado);
                    mensaje = "Usuario registrado";
                    vaciarCampos();
                } else {
                    mensaje = "El Nombre debe tener al menos dos letras y no contener números."
                }
            } else {
                mensaje = mensajePassword + ', (' + retorno.msj + ')';
            }
        }
        else {
            //si hay coincidencia de nombre de usuario local o persona, se muestra el mensaje
            mensaje = "El usuario ya existe";
        }
    } else {
        mensaje = "Todos los campos son obligatorios."
    }

    document.querySelector("#divRegistroMensajes").innerHTML = mensaje;
}



// -------------------------------------------------
//             Funciones de Registro de Usuario Persona
// -------------------------------------------------

function registrarUsuarioPersona(usuario, password, nombre) {
    //creando una nueva instancia de la clase UsuarioPersona
    let nuevoUsuario = new UsuarioPersona(usuario, password, nombre);
    usuariosPersona.push(nuevoUsuario);
}

function existeUsuario(nombreUsuario) {
    //devuelve boolean dependiendo si el usuario es existente
    let retorno = false;
    //busqueda en listado de usuarios Local
    let usuarioLocalEncontrado = buscarUsuarioPorNombre(usuariosLocal, nombreUsuario);
    //busqueda en listado de usuarios Persona
    let usuarioPersonaEncontrado = buscarUsuarioPorNombre(usuariosPersona, nombreUsuario);
    //si la busqueda es distinta de null entonces se encuentra el usuario
    if (usuarioLocalEncontrado != null || usuarioPersonaEncontrado != null) {
        retorno = true;
    }
    return retorno;
}

// -------------------------------------------------
//             Funciones Login
// -------------------------------------------------

function btnLoginIngresarHandler() {
    console.log('prueba');
    let mensaje = '';



    const usuarioIngresado = document.querySelector('#txtLoginUsuario').value;
    const passwordIngresado = document.querySelector('#txtLoginPassword').value;

    let usuarioEncontradoPorNombre = null;

    if (usuarioIngresado != '' && passwordIngresado != '') {
        let usuarioLocalEncontrado = buscarUsuarioPorNombre(usuariosLocal, usuarioIngresado);
        let usuarioPersonaEncontrado = buscarUsuarioPorNombre(usuariosPersona, usuarioIngresado);

        if (usuarioLocalEncontrado != null) {
            usuarioEncontradoPorNombre = usuarioLocalEncontrado;
        } else if (usuarioPersonaEncontrado != null) {
            usuarioEncontradoPorNombre = usuarioPersonaEncontrado;

        } else {
            mensaje = 'El usuario ingresado no existe.'
        }

        if (usuarioEncontradoPorNombre && usuarioEncontradoPorNombre.password == passwordIngresado) {
            usuarioLogueado = usuarioEncontradoPorNombre;
            if (usuarioLogueado.tipoUsuarioId == 1) {
                usuarioEstaLogueado = true;
                mostrarPantallaLocalLogueado();

            } else if (usuarioLogueado.tipoUsuarioId == 2) {
                usuarioEstaLogueado = true;
                mostrarPantallaPersonaLogueada();
            }
        } else if (mensaje == '') {
            mensaje = 'La contraseña no es correcta.'
        }
    }
    else {
        mensaje = 'Todos los datos son obligatorios.'
    }

    document.querySelector('#divLoginMensajes').innerHTML = mensaje;

}

// -------------------------------------------------
//             Funciones de Persona
// -------------------------------------------------
function verificarSiExisteReservaDeUsuarioEnLocal(pIdUsuario, pIdLocal) {
    let tieneReservasHechas = false;
    for (let i = 0; i < reservas.length; i++) {
        if (pIdUsuario == reservas[i].usuarioID && pIdLocal == reservas[i].localID && reservas[i].estado == 1) {
            tieneReservasHechas = true;
        }

    }
    return tieneReservasHechas;
}

function btnReservarEnLocalHandler() {
    let mensaje = "";
    let cuposParaReservar = document.querySelector('#txtReservarEnLocal').value;
    let data = this.getAttribute('data-usuario');

    if (cuposParaReservar != '') {
        if (!isNaN(cuposParaReservar)) {
            let cuposParaReservarInt = parseInt(cuposParaReservar);
            if (cuposParaReservarInt > 0) {
                if (!isNaN(data) && data != '') {
                    let dataInt = parseInt(data);

                    let cuposDisponiblesActuales = cuposDisponibles(dataInt);

                    if (cuposDisponiblesActuales >= cuposParaReservarInt) {
                        if (!verificarSiExisteReservaDeUsuarioEnLocal(usuarioLogueado.id, dataInt)) {

                            reservas.push(new Reserva(usuarioLogueado.id, dataInt, cuposParaReservarInt));
                            console.log('reservado');
                            mensaje = "Reserva realizada con exito.";

                            if (cuposDisponiblesActuales == cuposParaReservarInt) {
                                buscarLocalPorID(dataInt).dehabilitarLocal();
                                mensaje += "Se ha alcanzado el cupo maximo del local, el mismo se deshabilitara.";
                            }
                            let boton = document.querySelector('#btnReservarEnLocal');
                            boton.disabled = true;

                        } else {
                            console.error('Ya realizo reservas en ese local');
                        }

                    } else {
                        mensaje = 'Los cupos seleccionados superan la disponibilidad del local. Cupos disponibles: ' + cuposDisponiblesActuales + ".";
                    }

                } else {
                    console.error("Error en la data-usuario del input");
                }

            } else {
                mensaje = 'Debe ingresar un cupo mayor o igual a 1.';
            }
        } else {
            mensaje = 'Debe ingresar un numero en el campo de cupos.';
        }

    } else {
        mensaje = 'El campo de cupos no debe estar vacio.';
    }
    document.querySelector('#pMensajeReservarEnLocal').innerHTML = mensaje;
}



function generarTablaReservas() {

    let bodyHTML = '';
    // recorro arreglo de reservas
    for (let i = 0; i < usuariosLocal.length; i++) {

        // guardo la reserva de esta iteracion
        let localActual = usuariosLocal[i];
        // tomo su estado
        let localHabilitado = localActual.habilitado;

        let disponibilidad = cuposDisponibles(localActual.id);


        // los valores de arriba podrian usarse directamente, 
        // pero los guardo en variables separadas
        // para identificarlos



        //  si el estado es 1 "pendiente" y el id de usuario de la reserva es igual al id de usario logueado
        //  creo la fila correspondiente en la tabla

        if (localHabilitado && !usuarioLogueadoTieneReservasPendientesEnLocal(localActual.id)) {


            let textoBoton = 'Ver'
            // creacion del html de la fila
            // sustitur imagen por url real
            bodyHTML += `
                                            <tr>
                                                <td>
                                                <img  src="./img/${localActual.foto}" alt="foto del local">
                                                </td>
                                                <td>
                                                    ${localActual.nombre}
                                                </td>
                                                <td>
                                                    ${obtenerTipoDeLocalPorId(localActual.tipoLocal)}
                                                </td>
                                                <td>
                                                ${disponibilidad}
                                                </td>
                                                <td>
                                                <input data-usuario="${localActual.id}" type="button" value="${textoBoton}" class="btnVerDatosLocal">
                                            </td>
                                            </tr>
                                            `;
        }

    }



    document.querySelector("#bodyTablaReservar").innerHTML = bodyHTML;

    // // guardo todos los botones generados en un arreglo
    let arrayDeBotones = document.querySelectorAll(".btnVerDatosLocal");

    //     // recorro el arreglo de botones generados
    for (let i = 0; i < arrayDeBotones.length; i++) {
        //         // guardo el boton actual en variable
        let botonActual = arrayDeBotones[i];
        //         // le agrego evento click al boton actual
        botonActual.addEventListener("click", btnVerDatosLocalHandler);
    }

}
function btnVerDatosLocalHandler() {
    let data = this.getAttribute('data-usuario');
    console.log(data);
    ocultarPantallas();
    document.querySelector("#cabezalPersona").style.display = "block";
    generarDivVerDatosLocalAReservar(data);
    document.querySelector('#verDatosLocalAReservar').style.display = 'Block';
}

function generarDivVerDatosLocalAReservar(idLocal) {
    let localAMostrar = buscarLocalPorID(idLocal);
    let bodyHtml = ""
    if (localAMostrar != null) {
        bodyHtml += `
    <table>
    <tr>
    <td>
    <h3>Nombre: ${localAMostrar.nombre}</h3>
    <p>Direccion: ${localAMostrar.direccion}</p>
    <p>Capacidad total: ${localAMostrar.cupoMaximo}</p>
    <p>Tipo de local: ${obtenerTipoDeLocalPorId(localAMostrar.tipoLocal)}</p>
    </td>

    <td>
    <img id="imgAReservar" width="300px" src="./img/${localAMostrar.foto}" alt="foto del local">
    <br>

    
    </td>
    </tr>
    </table>
    <br>
    <br>
    <label for="txtReservarEnLocal">Cupos para reserva:</label>
    <br>
    <br>
      <input id="txtReservarEnLocal" type="number">
      <input data-usuario="${idLocal}" type="button" value="Reservar" id="btnReservarEnLocal">
      <p id="pMensajeReservarEnLocal"></p>
   
    `
    }



    document.querySelector('#verDatosLocalAReservar').innerHTML = bodyHtml;

    if (bodyHtml != "") {
        document.querySelector('#btnReservarEnLocal').addEventListener('click', btnReservarEnLocalHandler);
    }
}




function usuarioLogueadoTieneReservasPendientesEnLocal(localID) {

    for (let i = 0; i < reservas.length; i++) {
        // console.log(reservas[i].usuarioID,usuarioLogueado.id);
        // console.log(reservas[i].localID, localID);
        if (reservas[i].usuarioID == usuarioLogueado.id && reservas[i].localID == localID && reservas[i].estado == 1) {
            return true;
        }

    }
    return false;
}
// -------------------------------------------------
//             Funciones de Locales
// -------------------------------------------------

function generarSelectDinamicoHabilitarLocal() {

    let opciones = '';
    if (usuarioLogueado != null) {
        if (usuarioLogueado.habilitado) {
            opciones += `<option selected value="Habilitado">Habilitado</option>`;
        } else {
            opciones += `<option value="Habilitado">Habilitado</option>`;
        }
        if (!usuarioLogueado.habilitado) {
            opciones += `<option selected value="Deshabilitado">Deshabilitado</option>`;
        } else {
            opciones += `<option value="Deshabilitado">Deshabilitado</option>`;
        }

        document.querySelector('#habilitarDisponibilidad').innerHTML = opciones;
    }

}



function selectHabilitarDisponibilidadHandler() {
    let valueDelSelect = document.querySelector('#habilitarDisponibilidad').value;

    if (valueDelSelect != '' && valueDelSelect == 'Habilitado' || valueDelSelect == 'Deshabilitado') {
        if (valueDelSelect == 'Habilitado') {
            if (cuposDisponibles(usuarioLogueado.id) > 0) {
                usuarioLogueado.habilitarLocal();
                document.querySelector('#pMensajeHabilitarLocal').innerHTML = "Local Habilitado, con " + cuposDisponibles(usuarioLogueado.id) + " cupos disponibles.";

                console.log(usuarioLogueado);
                // console.log(cuposDisponibles(usuarioLogueado.id));
            } else {
                document.querySelector('#pMensajeHabilitarLocal').innerHTML = "El local a alcanzado el cupo maximo, y no podra habilitarse.";
                // generarSelectDinamicoHabilitarLocal();
                // console.log("el local no tiene cupos disponibles");
                document.querySelector('#habilitarDisponibilidad').value = 'Deshabilitado';
                console.log(usuarioLogueado);
            }


        } else if (valueDelSelect == 'Deshabilitado') {
            usuarioLogueado.dehabilitarLocal();
            document.querySelector('#pMensajeHabilitarLocal').innerHTML = "Local Deshabilitado, con " + cuposDisponibles(usuarioLogueado.id) + " cupos disponibles.";
            console.log(usuarioLogueado);
        }

    } else {
        console.log('El valor del select debe ser Habilitado o Deshabilitado');
    }

}



function btnModificarCupoMaximoHandler() {
    let cupoAModificar = document.querySelector('#txtCupoMaximo').value;

    if (cupoAModificar != "") {

        if (!isNaN(cupoAModificar) && cupoAModificar >= 0) {

            let cupoAModificarInt = parseInt(cupoAModificar);


            if (usuarioLogueado != null) {
                if (cuposDisponibles(usuarioLogueado.id) == usuarioLogueado.cupoMaximo) {
                    let cupoActual = usuarioLogueado.cupoMaximo;

                    if (cupoActual != cupoAModificarInt) {
                        usuarioLogueado.modificarCupoMaximo(cupoAModificarInt);
                        document.querySelector('#pMensajeModificarCupoMaximo').innerHTML = `Se modifico el cupo de ${cupoActual} a ${usuarioLogueado.cupoMaximo}`;
                    } else {
                        document.querySelector('#pMensajeModificarCupoMaximo').innerHTML = "El cupo ingresado es el mismo que el actual.";
                    }


                } else {
                    document.querySelector('#pMensajeModificarCupoMaximo').innerHTML = "No deben existir reservas pendientes para modificar el cupo maximo";
                }

            } else {
                document.querySelector('#pMensajeModificarCupoMaximo').innerHTML = "El usuario debe estar logueado"
            }
        } else {
            document.querySelector('#pMensajeModificarCupoMaximo').innerHTML = "El cupo maximo debe ser numerico y mayor a 0.";
        }
    } else {
        document.querySelector('#pMensajeModificarCupoMaximo').innerHTML = "El cupo maximo no debe estar vacio";
    }


}


// -------------------------------------------------
//            Funciones de Estadisticas Locales
// -------------------------------------------------

function porcentajeDeOcupacionEnUnLocal(idUsuarioLocal) {
    //reutilizamos la funcion que devuelve los cupos disponibles
    let mensaje = '';
    let cuposDisponiblesActuales = cuposDisponibles(idUsuarioLocal);
    let cuposMaximosActuales = usuarioLogueado.cupoMaximo;
    let reservasPendientes = cuposMaximosActuales - cuposDisponiblesActuales;

    if (usuarioLogueado.id == idUsuarioLocal && cuposMaximosActuales > 0) {
        let porcentajeOcupado = reservasPendientes * 100 / cuposMaximosActuales;
        mensaje = 'El porcentaje de ocupación del local es: ' + porcentajeOcupado + '%';
    } else { console.error('El usuario logeado es invalido'); }
    //regla de tres para calcular el porcentaje de ocupacion
    console.log(mensaje);
}

function promedioDeCalificacionesEnUnLocal(idUsuarioLocal) {
    let contadorCalificacionesValidas = 0;
    let sumaTotalDeCalificaciones = 0;
    let mensaje = "";
    for (let i = 0; i < reservas.length; i++) {
        //recorrer listado de reservas con estado finalizado que coincida con el id del usuario Local
        if (reservas[i].localID == idUsuarioLocal && reservas[i].estado == 2 && reservas[i].calificacion > 0) {
            //guarda en el contador solo las reservas con calificacion > 0
            contadorCalificacionesValidas++;
            //ir sumando en cada iteracion las calificaciones
            sumaTotalDeCalificaciones = sumaTotalDeCalificaciones + reservas[i].calificacion;
        } else if (contadorCalificacionesValidas > 0) {
            //calculo el promedio solo si existen calificaciones validas
            let promedio = sumaTotalDeCalificaciones / contadorCalificacionesValidas;
            mensaje = "Promedio de Calificaciones: " + promedio;
        } else { mensaje = "Este local no cuenta con reservas finalizadas calificadas por clientes."; }
    }
    console.log(mensaje);
    return mensaje;
}

function listadoDePromedioDeCalificacionesDeLocales() {
    let listadoHTML = '';
    //let contenedorDeListado = ;
    for (let i = 0; i < reservas.length; i++) {
        const reserva = reservas[i];

        listadoHTML += `<li>'${promedioDeCalificacionesEnUnLocal(reserva.localID)}'<li/>`;
        console.log(reserva.localID);
    }
    //referencias cruzadas? precisamos el nombre del local pero esta funcion recorre el listado de reservas, no puedo acceder al nombre del local?
    document.querySelector("#ulListadoDeCalificaciones").innerHTML = listadoHTML;
    console.log(listadoHTML);
}

function verTotalDeReservasRealizadasEnUnLocal(idUsuarioLocal) {

    let mensaje = '';
    let cuposDisponiblesActuales = cuposDisponibles(idUsuarioLocal);
    let cuposMaximosActuales = usuarioLogueado.cupoMaximo;
    let reservasPendientes = cuposMaximosActuales - cuposDisponiblesActuales;
    let cantidadReservasFinalizadas = 0;
    let totalReservas = 0;


    if (usuarioLogueado.id == idUsuarioLocal) {
        //mostrar cantiadd de reservas pendientes
        mensaje = 'El total de reservas pendientes es: ' + reservasPendientes;
        //mostrar cantidad de reservas finalizadas
        for (let i = 0; i < reservas.length; i++) {
            if (reservas[i].localID == idUsuarioLocal && reservas[i].estado == 2) {
                cantidadReservasFinalizadas++
            }
        }
        totalReservas = reservasPendientes + cantidadReservasFinalizadas;
    } else { mensaje = 'El usuario no es valido.' }

    mensaje += '. El total de reservas finalizadas es: ' + cantidadReservasFinalizadas;
    mensaje += '. El total de las reservas es: ' + totalReservas;
    console.log(mensaje);
}

// -------------------------------------------------
//            Funciones de Estadisticas Persona
// -------------------------------------------------

function calcularTotalDeReservasEnUnLocal(idUsuarioLocal) {
    //funcion para calcular todas las reservas en cualquier estado, en un mismo local
    let reservaHecha = 0;
    for (let i = 0; i < reservas.length; i++) {
        const reservaActual = reservas[i];
        if (reservaActual.localID == idUsuarioLocal && reservaActual.localID != null) {
            reservaHecha++
        }
    }
    console.log('El local con ID# ' + idUsuarioLocal + ' tiene un total de ' + reservaHecha + ' reserva(s) hechas.');
    //como validar si el param idUsuarioLocal no existe como id valido de usuarios local? referencia cruzada
}

function calcularTotalDeReservasFinalizadasDeUnaPersona(idUsuario) {
    //funcion para calcular el total de las reservas finalizadas para un usuario persona en particular
    let reservaFinalizada = 0;
    for (let i = 0; i < reservas.length; i++) {
        const reservaActual = reservas[i];
        if (reservaActual.usuarioID == idUsuario && reservaActual.usuarioID != null && reservaActual.estado == 2) {
            reservaFinalizada++
        }
    }
    console.log('La Persona con ID# ' + idUsuario + ' tiene un total de ' + reservaFinalizada + ' reserva(s) finalizadas.');
    //como validar si el param idUsuario no existe como id valido de usuarios Persona? referencia cruzada
}

// -------------------------------------------------
//             
// -------------------------------------------------

//  codigo de pruebas
// let passPureba = "Mm123456";
// console.log(validarPassword(passPureba));

// validacion de password


// bucar reservas local
function btnBuscarReservasEnLocalHandler() {
    let texto = document.querySelector("#buscadorDeReservas").value;


    if (texto != "") {
        console.log("buscar ", texto);
        completarTablaReservasPendientesLocalPorNombre(texto);
    }

}



// Crear tabla de reservas pendientes por local y nombre de usuario
function completarTablaReservasPendientesLocalPorNombre(subCadena) {
    console.log(subCadena);
    let bodyHTML = '';
    // recorro arreglo de reservas
    for (let i = 0; i < reservas.length; i++) {

        // guardo la reserva de esta iteracion
        let reservaActual = reservas[i];
        // tomo su estado
        let estado = reservaActual.estado;

        // tomo su usario
        let usuarioReserva = reservaActual.usuarioID;
        let localReservaId = reservaActual.localID;
        // los valores de arriba podrian usarse directamente, 
        // pero los guardo en variables separadas
        // para identificarlos



        //  si el estado es 1 "pendiente" y el id de usuario de la reserva es igual al id de usario logueado
        //  creo la fila correspondiente en la tabla
        console.log(buscarSubCadenaEnTexto(buscarUsuarioPorID(usuariosPersona, reservaActual.usuarioID).nombre, subCadena).key);

        if (estado == 1 && localReservaId == usuarioLogueado.id && buscarSubCadenaEnTexto(buscarUsuarioPorID(usuariosPersona, reservaActual.usuarioID).nombre, subCadena).key == 1) {


            let textoBoton = 'Finalizar'
            // creacion del html de la fila
            // sustitur imagen por url real
            bodyHTML += `
                                        <tr>
                                            <td>
                                                ${buscarUsuarioPorID(usuariosPersona, reservaActual.usuarioID).nombre}
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


function buscarSubCadenaEnTexto(texto, subcadena) {



    // controlo que no esten vacias las variables
    if (texto != "" && subcadena != "") {

        // paso el texto a minuscula para ampliar las coincidencias por el case sensitive
        texto = texto.toLowerCase();
        subcadena = subcadena.toLowerCase();
        subCadenas = 0;
        // recorro el texto
        for (let i = 0; i < texto.length; i++) {
            //inicializo el texto que luego usare para comparar
            let textoAComparar = "";
            //recorro la subcadena buscando coincidencias con el texto
            for (let o = 0; o < subcadena.length; o++) {
                //verifico que al comparar no pasarme del largo del texto
                if (o + i <= texto.length - 1) {
                    // guadro un texto desde i con el largo de la sub cadena
                    //para luego comparar
                    textoAComparar += texto[o + i];
                }

            }
            // comparo el texto, si encuentro coincidencia cuento una subcadena
            if (textoAComparar == subcadena) {
                // console.log(textoAComparar);
                // console.log(subcadena);
                subCadenas++
            }


        }

        // console.log('sub', subCadenas);
        if (subCadenas > 0) {
            return { key: 1, msj: "Se encontraron coincidencias" }
        } else {
            return { key: 2, msj: "No se encontraron coincidencias" }
        }

    } else {
        return { key: 0, msj: "Datos insuficientes." }
    }



}








// ========================================================
// function validarPassword(pass){    
// let tieneSeisCaracteres = pass.length >= 6;
// let tieneMayus = false;
// let tieneMinus = false;
// let tieneNumeros = false;


// for (let i = 0; i < pass.length; i++) {
//     let codigo = pass[i].charCodeAt();

//     if(codigo>=65 && codigo <= 90){
//         tieneMayus = true;
//     }

//     if(codigo>=97 && codigo <= 122){
//         tieneMinus = true;
//     }

//     if(!isNaN(pass[i])){
//         tieneNumeros = true;
//     }

// }

// if(!tieneSeisCaracteres){
//     return {id:1, msj: "debe tener al menos 6 caracteres"};
// }else if(!tieneMayus){
//     return {id:2,msj: "debe tener al menos una mayus"};
// }else if(!tieneMinus){
//     return {id:3,msj: "debe tener al menos una minus"};
// }else if(!tieneNumeros){
//     return {id:3,msj: "debe tener al menos un num"};
// }else{
//     return {id:0,msj: "pass correcto"};
// }

// }

// cupos disponibles
//esta funcion ya esta declarada mas arriba en funciones globales
/* function cuposDisponibles(pIdDeLocal){
    let cuposMaximo = 0;
    let cuposUsados = 0;
    for (let i = 0; i < usuariosLocal.length; i++) {
        if(usuariosLocal[i].id == pIdDeLocal){
            cuposMaximo = usuariosLocal[i].cupoMaximo ;
        }
    }

    for (let i = 0; i < reservas.length; i++) {
       if(reservas[i].localID == pIdDeLocal && reservas[i].estado == 1){
           cuposUsados += reservas[i].cupos;
       }
    }

    return cuposMaximo - cuposUsados ;
} */

console.log("cupos disponibles = " + cuposDisponibles(2));


// USUARIO PERSONA






function btnCancelarReservaHandler() {
    // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
    // devuelve el id de la reserva
    let idDeReservaACancelar = this.getAttribute("data-usuario");

    //busco la reserva a cancelar
    let reservaACancelar = buscarReservaPorID(idDeReservaACancelar);


    // aplico el metodo cancelar en la reserva obtenida
    reservaACancelar.cancelarReserva();

    // recargo la lista
    // completarTablaReservasPendientes();
    completarTablaReservasSegunEstadoYUsuario(1, usuarioLogueado.tipoUsuarioId);
}

// funcion para reserva
function buscarReservaPorID(id) {
    // si no encuentra devuelvo null
    let reserva = null;
    // recorro el arreglo de reservas
    for (let i = 0; i < reservas.length; i++) {
        // si el id por parametro es igual al id de la reserva de la iteracion 
        if (id == reservas[i].id) {
            // guardo el objeto reserva en la variable reserva
            reserva = reservas[i];
        }
    }
    // devuevlo la reserva
    return reserva;
}

// funciones para local

// buscar local por id






// //////////////////////////////////////////////////////////////////////


function completarTablaReservasSegunEstadoYUsuario(pEstado, pTipoUsuario) {
    let bodyHTML = '';

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

        if (estadoReserva == pEstado) {


            if (pEstado == 1 && pTipoUsuario == 2 && idUsuarioReserva == usuarioLogueado.id) {
                // nombre de los botones que se crearan en la tabla
                let textoBoton = 'Cancelar'
                // creacion del html de la fila
                // sustitur imagen por url real
                bodyHTML += `
                    <tr>
                        <td>
                        <img id="imgAReservar" width="300px" src="./img/${buscarLocalPorID(reservaActual.localID).foto}" alt="foto del local">
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

            if (pEstado == 2 && pTipoUsuario == 2 && idUsuarioReserva == usuarioLogueado.id) {
                // nombre de los botones que se crearan en la tabla
                let textoBoton = 'Puntuar'
                let calificacion = "Sin calificar"
                let data = [i, reservaActual.id];

                // creacion del html de la fila
                // sustitur imagen por url real
                if (!reservaActual.calificacion == 0) { calificacion = reservaActual.calificacion }
                bodyHTML += `
                                    <tr>
                                        <td>
                                        <img id="imgAReservar" width="300px" src="./img/${buscarLocalPorID(reservaActual.localID).foto}" alt="foto del local">
                                        </td>
                                        <td>
                                            ${buscarLocalPorID(reservaActual.localID).nombre}
                                        </td>
                                        <td>
                                            ${reservaActual.cupos}
                                        </td>

                                        <td>
                                        <p>${calificacion}</p>
                                        <fieldset>
                                        <label>
                                            1<input type="radio" name="numero${i}" value="1">
                                        </label>
                                        <label>
                                            2<input type="radio" name="numero${i}" value="2">
                                        </label>
                                        <label>
                                            3<input type="radio" name="numero${i}" value="3">
                                        </label>
                                        <label>
                                            4<input type="radio" name="numero${i}" value="4">
                                        </label>
                                        <label>
                                            5<input type="radio" name="numero${i}" value="5">
                                        </label>
                                            </td>

                                            <td>
                                        <input data-usuario="${data}" type="button" value="${textoBoton}" class="btnPuntuarReserva">
                                        </fieldset>
                                        
                                    </td>

                               
                                    
                                    </tr>
                                    `;
            }

            if (pEstado == 1 && pTipoUsuario == 1 && idLocalReserva == usuarioLogueado.id) {
                // nombre de los botones que se crearan en la tabla
                let textoBoton = 'Finalizar'
                // creacion del html de la fila
                // sustitur imagen por url real
                bodyHTML += `
                                        <tr>
                                            <td>
                                                ${buscarUsuarioPorID(usuariosPersona, reservaActual.usuarioID).nombre}
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







    if (pEstado == 1 && pTipoUsuario == 2) {

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


    if (pEstado == 1 && pTipoUsuario == 1) {

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


    if (pEstado == 2 && pTipoUsuario == 2) {

        // Agrego el html generado e la tabla html
        document.querySelector("#bodyTablaPuntuarReservasFinalizadas").innerHTML = bodyHTML;

        let arrayDeBotones = document.querySelectorAll(".btnPuntuarReserva");

        for (let i = 0; i < arrayDeBotones.length; i++) {
            // guardo el boton actual en variable
            let botonActual = arrayDeBotones[i];
            // le agrego evento click al boton actual
            botonActual.addEventListener("click", btnPuntuarReservaHandler);
        }
        // guardo todos los botones generados en un arreglo
        // let arrayDeBotones = document.querySelectorAll(".btnFinalizarReserva");

        // // recorro el arreglo de botones generados
        // for (let i = 0; i < arrayDeBotones.length; i++) {
        //     // guardo el boton actual en variable
        //     let botonActual = arrayDeBotones[i];
        //     // le agrego evento click al boton actual
        //     botonActual.addEventListener("click", btnFinalizarReservaHandler);
        // }
    }





}


function btnPuntuarReservaHandler() {
    console.log("puntuar");


    // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
    // devuelve el id de la reserva
    let datosReservaActual = this.getAttribute("data-usuario");

    //busco la reserva a puntuar
    let reservaAPuntuar = buscarReservaPorID(datosReservaActual[2]);
    console.log(reservaAPuntuar);

    let inputsCalificacion = document.querySelectorAll(`input[name=numero${datosReservaActual[0]}]`)
    // console.table(inputsCalificacion);
    for (let i = 0; i < inputsCalificacion.length; i++) {
        if (inputsCalificacion[i].checked == true) {
            console.log('cheauqeado ' + inputsCalificacion[i].value);
            if (!isNaN(inputsCalificacion[i].value) && inputsCalificacion[i].value != "") {
                reservaAPuntuar.calificar(parseInt(inputsCalificacion[i].value));
            }

        }
    }
    // aplico el metodo cancelar en la reserva obtenida


    // reservaACancelar.finalizarReserva();

    // recargo la lista
    completarTablaReservasSegunEstadoYUsuario(2, usuarioLogueado.tipoUsuarioId);
}


function btnFinalizarReservaHandler() {
    console.log('finalizar');

    // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
    // devuelve el id de la reserva
    let idDeReservaACancelar = this.getAttribute("data-usuario");

    //busco la reserva a cancelar
    let reservaACancelar = buscarReservaPorID(idDeReservaACancelar);


    // aplico el metodo cancelar en la reserva obtenida
    reservaACancelar.finalizarReserva();

    // recargo la lista
    vaciarCampos();
    completarTablaReservasSegunEstadoYUsuario(1, usuarioLogueado.tipoUsuarioId);
}