// let usuarioLocal1 =  new UsuarioLocal('Leonardo','leo1224',"por ahi",30,"foto.jpg",2);
// usuarioLocal1.dehabilitarLocal();

// -------------------------------------------------
//              VARIABLES GLOBALES Y DATOS
// -------------------------------------------------
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
    // mostrarLogin();
    // actualizarMenuPorTipoDeUsuario();
    // cargarClickEnBotones();
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
//              Carca de opciones
// -------------------------------------------------

function precargaDeOpciones(){
    precargarTiposDeUsuarios();
    precargarTipoLocal();
    precargarTipoEstadoDeReserva ();
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
function precargarTipoEstadoDeReserva () {
    tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Pendiente")); // id 1
    tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Finalizada")); // id 2
    tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Cancelada")); // id 3
}


// -------------------------------------------------
//              Carga de objetos
// -------------------------------------------------
function precargaDeUsuarios() {
    precargarUsuarioLocal ();
    precargarUsuarioPersona();
}

//              Carga de usuarios Local
// -------------------------------------------------
function precargarUsuarioLocal () {
    //nombre de usuario, password, nombre, direccion, cupos maximos, foto, tipo de local
    usuariosLocal.push(new UsuarioLocal('Usuario1','Paponita123','La Paponita',"direccion 1",30,"foto1.jpg",1)); // id 1
    usuariosLocal.push(new UsuarioLocal('Usuario2','Pasiva123','La Pasiva',"direccion 2",55,"foto2.jpg",1)); // id 2
    usuariosLocal.push(new UsuarioLocal('Usuario3','Gaspacho123','Gaspacho',"direccion 3",200,"foto3.jpg",1)); // id 3
    usuariosLocal.push(new UsuarioLocal('Usuario4','Louvre123','Louvre',"direccion 4",40,"foto4.jpg",2)); // id 4
    usuariosLocal.push(new UsuarioLocal('Usuario5','MHN123','Museo de historia natural',"direccion 5",350,"foto5.jpg",2)); // id 5
    usuariosLocal.push(new UsuarioLocal('Usuario6','Galpon123','El Galpon',"direccion 6",120,"foto6.jpg",3)); // id 6
    usuariosLocal.push(new UsuarioLocal('Usuario7','Solis123','Teatro Solis',"direccion 7",234,"foto7.jpg",3)); // id 7

}


//              Carga de usuarios persona
// -------------------------------------------------
function precargarUsuarioPersona () {
    // nombre de usuario, password, nombre

    usuariosPersona.push(new UsuarioPersona("Usuario8","Juan1234","Juan")); // id 8
    usuariosPersona.push(new UsuarioPersona("Usuario9","Mario1234","Mario")); // id 9
    usuariosPersona.push(new UsuarioPersona("Usuario10","Pedro1234","Pedro")); // id 10
    usuariosPersona.push(new UsuarioPersona("Usuario11","Ana1234","Ana")); // id 11
    usuariosPersona.push(new UsuarioPersona("Usuario12","Lucia1234","Lucia")); // id 12
    usuariosPersona.push(new UsuarioPersona("Usuario13","Franco1234","Franco")); // id 13
    usuariosPersona.push(new UsuarioPersona("Usuario14","Jose1234","Jose")); // id 14

}

// -------------------------------------------------
//              Carga de Reservas
// -------------------------------------------------
function precargarReservas () {
    //usuario, local, cupos

    // reservas pendientes
    reservas.push(new Reserva(8,1,4)); // id 1
    reservas.push(new Reserva(9,2,5)); // id 2
    reservas.push(new Reserva(10,3,10)); // id 3
    reservas.push(new Reserva(11,4,3)); // id 4
    reservas.push(new Reserva(12,6,7)); // id 5

    // reserva finalizadas
    reservas.push(new Reserva(11,5,5)); // id 6
    reservas[5].finalizarReserva();
    reservas.push(new Reserva(12,7,15)); // id 7
    reservas[6].finalizarReserva();

    // reserva canceladas
    reservas.push(new Reserva(8,2,5)); // id 8
    reservas[7].cancelarReserva();


}