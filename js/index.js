// let usuarioLocal1 =  new UsuarioLocal('Leonardo','leo1224',"por ahi",30,"foto.jpg",2);
// usuarioLocal1.dehabilitarLocal();

// -------------------------------------------------
//              VARIABLES GLOBALES Y DATOS
// -------------------------------------------------

//Harcodeo el usuario que logeo para mostrar la pantalla, hay que cambiarlo luego
// 2 usuario persoa
// 1 local 
let tipoDeUsuarioLogueado = 2 ;
let usuarioEstaLogueado= false;


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
    precargarUsuarioLocal();
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
    reservas.push(new Reserva(8,2,7)); // id 8
    reservas[7].cancelarReserva();


}
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


}

// -------------------------------------------------
//             Eventos De botones Menu
// -------------------------------------------------

function btnMenuLoginHandler(){
    mostrarLogin();
}

function btnMenuHomeHandler(){
    mostrarHome();
}

function btnMenuRegistroHandler(){
    mostrarRegistro();
}

function btnMenuCerrarSesionHandler(){
    usuarioEstaLogueado = 0
    
    mostrarHome();
    
}

// -------------------------------------------------
//             Manejo De Pantallas
// -------------------------------------------------
function mostrarLogin() {
   
    ocultarPantallas();
    document.querySelector("#divLogin").style.display = "block";
}

function mostrarRegistro(){
    
    ocultarPantallas();
    document.querySelector("#divRegistro").style.display = "block";
}

function mostrarHome(){
    
    ocultarPantallas();
    document.querySelector("#divHome").style.display = "block";
}

// LOGIN

function mostrarPantallaLocalLogueado(){
    ocultarPantallas();
    // mostrar opciones
    document.querySelector("#cabezalLocal").style.display = "block";
      // mostrar contenido
    document.querySelector("#adminReserva").style.display = "block";
    // mostrar botones
    document.querySelector("#btnMenuCerrarSesion").style.display = "block";
}

function mostrarPantallaPersonaLogueada(){
    ocultarPantallas();
    // mostrar opciones
    document.querySelector("#cabezalPersona").style.display = "block";
    // mostrar contenido
    document.querySelector("#reservasPendientes").style.display = "block";
    // mostrar botones
    document.querySelector("#btnMenuCerrarSesion").style.display = "block";
    
}

// Menu persona
// -------------------------------
    // Estadistica
function btnEstadisticasPersonaMenuHandler(){
    ocultarPantallas();
    document.querySelector("#cabezalPersona").style.display = "block";
    document.querySelector("#infoEstadistica").style.display = "block";
    document.querySelector("#infoEstadisticaPersona").style.display = "block";
}
    // Reservar
function btnReservarPersonaMenuHandler(){
    ocultarPantallas();
    document.querySelector("#cabezalPersona").style.display = "block";
    document.querySelector("#realizarReserva").style.display = "block";

}
// reservas pendientes
function btnReservasPendientesPersonaMenuHandler(){
    ocultarPantallas();
    document.querySelector("#reservasPendientes").style.display = "block";
    document.querySelector("#cabezalPersona").style.display = "block";
}

// reservas pendientes
function btnReservasFinalizadasPersonaMenuHandler(){
    ocultarPantallas();
    document.querySelector("#cabezalPersona").style.display = "block";
    document.querySelector("#reservasFinalizadas").style.display = "block";
   
}


// Menu Local
// -------------------------------

function btnEstadisticasLocalMenuHandler(){
    ocultarPantallas();
    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#infoEstadistica").style.display = "block";
    document.querySelector("#infoEstadisticaLocal").style.display = "block";
}
function btnAdministrarReservasLocalMenuHandler(){
    ocultarPantallas();
    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#adminReserva").style.display = "block";
   
}
function btnAdministrarLocalMenuHandler(){
    ocultarPantallas();
    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#administrarLocal").style.display = "block";
   
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


    //
    document.querySelector("#infoEstadistica").style.display = "none";
    

    document.querySelector("#adminReserva").style.display = "none";
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divHome").style.display = "none";
    document.querySelector("#divRegistro").style.display = "none";


    // botones ocultos
    if(usuarioEstaLogueado){
        document.querySelector("#btnMenuCerrarSesion").style.display = "block";
    }else{
        document.querySelector("#btnMenuCerrarSesion").style.display = "none";
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

}

// -------------------------------------------------
//             Funciones Globales
// -------------------------------------------------

function buscarUsuarioPorNombre(arreglo, nombreUsuario) {
    let resultado = null;
    let i = 0;
    while (resultado == null && i < arreglo.length) {
        let usuarioActual = arreglo[i];
        if (usuarioActual.nombreUsuario == nombreUsuario) {
            resultado = usuarioActual;
        }
        i++;
    }
    return resultado;
}


// -------------------------------------------------
//             Registro de Usuario Persona
// -------------------------------------------------

function btnRegistrarseHandler() {
    let mensaje = "";
    const usuarioIngresado = document.querySelector("#txtRegistroUsuario").value;
    const passwordIngresado = document.querySelector("#txtRegistroPassword").value;
    
    if (!existeUsuario(usuarioIngresado)) {
        registrarUsuarioPersona(usuarioIngresado, passwordIngresado);
        mensaje = "Usuario registrado";
        vaciarCampos();
    } else {
        mensaje = "El usuario ya existe";
    }
    document.querySelector("#divRegistroMensajes").innerHTML = mensaje;
}


// -------------------------------------------------
//             Funciones de Registro de Usuario Persona
// -------------------------------------------------

function registrarUsuarioPersona(usuario, password) {
    let nuevoUsuario = new UsuarioPersona(usuario, password);
    usuariosPersona.push(nuevoUsuario);
}

function existeUsuario(nombreUsuario){  
    //devuelve boolean dependiendo si el usuario es existente e
    let retorno = false;
    //busqueda en listado de usuarios Local
    let usuarioLocalEncontrado = buscarUsuarioPorNombre(usuariosLocal, nombreUsuario);
    //busqueda en listado de usuarios Persona
    let usuarioPersonaEncontrado = buscarUsuarioPorNombre(usuariosPersona, nombreUsuario);
    //si la busqueda es distinta de null entonces se encuentra el usuario
    if (usuarioLocalEncontrado != null || usuarioPersonaEncontrado != null){
    retorno = true;
    }
    return retorno;
    }
    


// -------------------------------------------------
//             Funciones Login
// -------------------------------------------------

function btnLoginIngresarHandler(){

usuarioEstaLogueado = true;
if(tipoDeUsuarioLogueado == 2){
    mostrarPantallaPersonaLogueada();
}else if(tipoDeUsuarioLogueado ==1){
    mostrarPantallaLocalLogueado();
}else{

}

}





