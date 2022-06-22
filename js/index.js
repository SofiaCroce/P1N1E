// -------------------------------------------------
//              VARIABLES GLOBALES Y DATOS
// -------------------------------------------------

let tipoDeUsuarioLogueado = 1;
let usuarioEstaLogueado = false;
let usuarioLogueado = {};

let tiposDeUsuarioPrecarga = [];
let tiposDeUsuario = [];

let tiposDeLocalPrecarga = [];
let tiposDeLocal = [];

let tipoEstadoDeReservaPrecarga = [];
let tipoEstadoDeReserva = [];

let usuariosLocalPrecarga = [];
let usuariosLocal = [];

let usuariosPersonaPrecarga = [];
let usuariosPersona = [];

let reservasPrecarga = [];
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
  // Se cargan los tipos de usuario en un arreglo a controlar posteriormente
  tiposDeUsuarioPrecarga.push("Local"); // id 1
  tiposDeUsuarioPrecarga.push("Persona"); // id 2

  // Pruebas de carga que darán error.
  tiposDeUsuarioPrecarga.push("");
  tiposDeUsuarioPrecarga.push("Persona");

  // Corro función que controlara la carga de los tipos de usuario.
  controlPrecargaTiposDeUsuarios();
}

//Función que recorre el arreglo de tiposDeUsuarioPrecarga
// y controla que cada dato no este vacío y
//no exista en el arreglo de tiposDeUsuario y pushea a tiposDeUsuario.

function controlPrecargaTiposDeUsuarios() {
  // recorro arreglo tiposDeUsuarioPrecarga
  for (let i = 0; i < tiposDeUsuarioPrecarga.length; i++) {
    // guardo el dato de tipo de usuario en variable
    let tipoNombreActual = tiposDeUsuarioPrecarga[i];

    // me aseguro que el campo nombre de tipo de usuario no viaje null o undefined al constructor.
    let existeCampoTipoNombre =
      tipoNombreActual != null && tipoNombreActual != undefined;

    // controlo que el nombre del tipo actual no este vació
    if (tipoNombreActual != "" && existeCampoTipoNombre) {
      // controlo que no exista ese nombre en el arreglo de tipos de usuario.
      if (!validarNombreTipoUsuario(tipoNombreActual)) {
        // pusheo el nevo tipo de usuario.
        tiposDeUsuario.push(new TipoUsuario(tipoNombreActual));

        // pusheo anterior con sus respectiuvos ID
        // tiposDeUsuario.push(new TipoUsuario("Local")); // id 1
        // tiposDeUsuario.push(new TipoUsuario("Persona")); // id 2
      } else {
        // si existe aviso error por consola
        console.warn("Ya existe tipo de usuario.");
      }
    } else {
      // si está vacío aviso error por consola.
      console.warn(
        "El tipo usuario actual no debe ser vacío, nulo o indefinido"
      );
    }
  }
}

// función que recibe un nombre de tipo de usuario
// y controla si existe en el arreglo de tipos de usuarios

function validarNombreTipoUsuario(nombre) {
  // inicializo por defecto que no existe
  let existeNombre = false;

  // recorro el arreglo de tipos de usuarios
  for (let i = 0; i < tiposDeUsuario.length; i++) {
    // si el nombre de tipo de usuario en el que estoy en este momento iterando
    // es igual al nombre pasado por parámetro
    // paso existeNombre a true ya que existe ese nombre

    if (tiposDeUsuario[i].nombre == nombre) {
      existeNombre = true;
    }
  }
  //retorno si existe o no usuario.
  return existeNombre;
}

//              Carga de tipos de locales
// -------------------------------------------------

function precargarTipoLocal() {
  // Se cargan los tipos de local en un arreglo a controlar posteriormente
  tiposDeLocalPrecarga.push("Restaurante"); // id 1
  tiposDeLocalPrecarga.push("Museo"); // id 2
  tiposDeLocalPrecarga.push("Teatro"); // id 3

  // Pruebas de carga que darán error.
  tiposDeLocalPrecarga.push("");
  tiposDeLocalPrecarga.push("Teatro");

  // Corro función que controlara la carga de los tipos de local.
  controlPrecargaTiposDeLocal();
}

//Función que recorre el arreglo de tiposDeLocalPrecarga
// y controla que cada dato no este vacío y
//no exista en el arreglo de tiposDeLocal y pushea a tiposDeLocal.

function controlPrecargaTiposDeLocal() {
  // recorro arreglo tiposDeLocalPrecarga
  for (let i = 0; i < tiposDeLocalPrecarga.length; i++) {
    // guardo el dato de tipo de local en variable
    let tipoActual = tiposDeLocalPrecarga[i];

    // me aseguro que el campo nombre de tipo de local no viaje null o undefined al constructor.
    let existeCampoTipoNombreLocal =
      tipoActual != null && tipoActual != undefined;

    // controlo que el nombre del tipo actual no este vació
    if (tipoActual != "" && existeCampoTipoNombreLocal) {
      // controlo que no exista ese nombre en el arreglo de tipos de local.
      if (!validarNombreTipoLocal(tipoActual)) {
        // pusheo el nevo tipo de local.
        tiposDeLocal.push(new TipoLocal(tipoActual));

        // pusheo anterior con sus respectiuvos ID

        // tiposDeLocal.push(new TipoLocal("Restaurante")); // id 1
        // tiposDeLocal.push(new TipoLocal("Museo")); // id 2
        // tiposDeLocal.push(new TipoLocal("Teatro")); // id 3
      } else {
        // si existe aviso error por consola
        console.warn("Ya existe tipo de local.");
      }
    } else {
      // si está vacío aviso error por consola.
      console.warn("El tipo local actual no debe ser vacío, nulo o indefinido");
    }
  }
}

function validarNombreTipoLocal(nombre) {
  // inicializo por defecto que no existe
  let existeNombre = false;

  // recorro el arreglo de tipos de local
  for (let i = 0; i < tiposDeLocal.length; i++) {
    // si el nombre de tipo de local en el que estoy en este momento iterando
    // es igual al nombre pasado por parámetro
    // paso existeNombre a true ya que existe ese nombre es los locales

    if (tiposDeLocal[i].nombre == nombre) {
      existeNombre = true;
    }
  }
  //retorno si existe o no nombre de local.
  return existeNombre;
}

//              Carga de tipos de estado de reservas
// -------------------------------------------------

function precargarTipoEstadoDeReserva() {
  // Se cargan los tipos de estados de reservas en un arreglo a controlar posteriormente
  tipoEstadoDeReservaPrecarga.push("Pendiente"); // id 1
  tipoEstadoDeReservaPrecarga.push("Finalizada"); // id 2
  tipoEstadoDeReservaPrecarga.push("Cancelada"); // id 3

  // Pruebas de carga que darán error.
  tipoEstadoDeReservaPrecarga.push("");
  tipoEstadoDeReservaPrecarga.push("Cancelada");

  // Corro función que controlara la carga de los tipos de estados de reservas.
  controlPrecargaTipoEstadoDeReserva();
}

//Función que recorre el arreglo de tipoEstadoDeReservaPrecarga
// y controla que cada dato no este vacío y
//no exista en el arreglo de tipoEstadoDeReserva y pushea a tipoEstadoDeReserva.

function controlPrecargaTipoEstadoDeReserva() {
  // recorro arreglo tipoEstadoDeReservaPrecarga
  for (let i = 0; i < tipoEstadoDeReservaPrecarga.length; i++) {
    // guardo el dato de tipo de estado de reserva en variable
    let tipoActual = tipoEstadoDeReservaPrecarga[i];

    // me aseguro que el campo nombre de tipo de reserva no viaje null o undefined al constructor.
    let existeCampoTipoNombreReserva =
      tipoActual != null && tipoActual != undefined;

    // controlo que el nombre del tipo de estado de reserva no este vació
    if (tipoActual != "" && existeCampoTipoNombreReserva) {
      // controlo que no exista ese nombre en el arreglo de tipo de estado de reserva.
      if (!validarNombreTipoEstadoDeReserva(tipoActual)) {
        // pusheo el nevo tipo de estado de reserva.
        tipoEstadoDeReserva.push(new TipoEstadoDeReserva(tipoActual));

        // pusheo anterior con sus respectiuvos ID

        // tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Pendiente")); // id 1
        // tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Finalizada")); // id 2
        // tipoEstadoDeReserva.push(new TipoEstadoDeReserva("Cancelada")); // id 3
      } else {
        // si existe aviso error por consola
        console.warn("Ya existe tipo de estado de reserva.");
      }
    } else {
      // si está vacío aviso error por consola.
      console.warn(
        "El tipo de estado de reserva actual no debe ser vacío, nulo o indefinido"
      );
    }
  }
}

//Funcion que valida si existe el nombre de tipo estado reserva
function validarNombreTipoEstadoDeReserva(nombre) {
  // inicializo por defecto que no existe
  let existeNombre = false;

  // recorro el arreglo de tipo de estado de reserva
  for (let i = 0; i < tipoEstadoDeReserva.length; i++) {
    // si el nombre de tipo de estado de reserva en el que estoy en este momento iterando
    // es igual al nombre pasado por parámetro
    // paso existeNombre a true ya que existe ese nombre es los tipos de estado de reserva

    if (tipoEstadoDeReserva[i].nombre == nombre) {
      existeNombre = true;
    }
  }
  //retorno si existe o no tipo de estado de reserva.
  return existeNombre;
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
  // nombre de usuario, password, nombre, direccion, cupos maximos, foto, tipo de local
  usuariosLocalPrecarga.push([
    "Usuario1",
    "Paponita123",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario2",
    "Pasiva123",
    "La Pasiva",
    "direccion 2",
    55,
    "foto2.jpg",
    1,
  ]); // id 2
  usuariosLocalPrecarga.push([
    "Usuario3",
    "Gaspacho123",
    "Gaspacho",
    "direccion 3",
    200,
    "foto3.jpg",
    1,
  ]); // id 3
  usuariosLocalPrecarga.push([
    "Usuario4",
    "Louvre123",
    "Louvre",
    "direccion 4",
    40,
    "foto4.jpg",
    2,
  ]); // id 4
  usuariosLocalPrecarga.push([
    "Usuario5",
    "Mhn123",
    "Museo de historia natural",
    "direccion 5",
    350,
    "foto5.jpg",
    2,
  ]); // id 5
  usuariosLocalPrecarga.push([
    "Usuario6",
    "Galpon123",
    "El Galpon",
    "direccion 6",
    120,
    "foto6.jpg",
    3,
  ]); // id 6
  usuariosLocalPrecarga.push([
    "Usuario7",
    "Solis123",
    "Teatro Solis",
    "direccion 7",
    234,
    "foto7.jpg",
    3,
  ]); // id 7
  // usuariosLocalPrecarga
  // usuariosLocal

  // prueba errores
  // nombre usuario
  usuariosLocalPrecarga.push([
    "",
    "Paponita123",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario1",
    "Paponita123",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1

  //password
  usuariosLocalPrecarga.push([
    "Usuario102",
    "Paponita",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario103",
    "aponita123000",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario104",
    "P123000",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario105",
    "1230000",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario1052",
    "Ab3",
    "La Paponita",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1

  // nombre
  usuariosLocalPrecarga.push([
    "Usuario106",
    "Aa12345",
    "",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario107",
    "Aa12345",
    "A",
    "direccion 1",
    30,
    "foto1.jpg",
    1,
  ]); // id 1

  // direccion
  usuariosLocalPrecarga.push([
    "Usuario108",
    "Aa12345",
    "asd",
    ,
    30,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario109",
    "Aa12345",
    "asd",
    null,
    30,
    "foto1.jpg",
    1,
  ]); // id 1

  // cupos maximos
  usuariosLocalPrecarga.push([
    "Usuario110",
    "Aa12345",
    "asd",
    "asd",
    ,
    "foto1.jpg",
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario111",
    "Aa12345",
    "asd",
    "asd",
    "as",
    "foto1.jpg",
    1,
  ]); // id 1

  //foto

  usuariosLocalPrecarga.push([
    "Usuario112",
    "Aa12345",
    "asdf",
    "direccion 1",
    30,
    ,
    1,
  ]); // id 1
  usuariosLocalPrecarga.push([
    "Usuario113",
    "Aa12345",
    "adsf",
    "direccion 1",
    30,
    null,
    1,
  ]); // id 1

  // tipo de local

  usuariosLocalPrecarga.push([
    "Usuario116",
    "Solis123",
    "Teatro Solis",
    "direccion 7",
    234,
    "foto7.jpg",
    "A",
  ]); // id 7
  usuariosLocalPrecarga.push([
    "Usuario117",
    "Solis123",
    "Teatro Solis",
    "direccion 7",
    234,
    "foto7.jpg",
    "4",
  ]); // id 7
  usuariosLocalPrecarga.push([
    "Usuario118",
    "Solis123",
    "Teatro Solis",
    "direccion 7",
    234,
    "foto7.jpg",
    5,
  ]); // id 7

  // corro funcion de control de precarga
  controlPrecargaUsuarioLocal();
  // Carde de datos anterior.
  //nombre de usuario, password, nombre, direccion, cupos maximos, foto, tipo de local
  // usuariosLocal.push(new UsuarioLocal('Usuario1','Paponita123','La Paponita',"direccion 1",30,"foto1.jpg",1)); // id 1
  // usuariosLocal.push(new UsuarioLocal('Usuario2','Pasiva123','La Pasiva',"direccion 2",55,"foto2.jpg",1)); // id 2
  // usuariosLocal.push(new UsuarioLocal('Usuario3','Gaspacho123','Gaspacho',"direccion 3",200,"foto3.jpg",1)); // id 3
  // usuariosLocal.push(new UsuarioLocal('Usuario4','Louvre123','Louvre',"direccion 4",40,"foto4.jpg",2)); // id 4
  // usuariosLocal.push(new UsuarioLocal('Usuario5','MHN123','Museo de historia natural',"direccion 5",350,"foto5.jpg",2)); // id 5
  // usuariosLocal.push(new UsuarioLocal('Usuario6','Galpon123','El Galpon',"direccion 6",120,"foto6.jpg",3)); // id 6
  // usuariosLocal.push(new UsuarioLocal('Usuario7','Solis123','Teatro Solis',"direccion 7",234,"foto7.jpg",3)); // id 7
}

function controlPrecargaUsuarioLocal() {
  // inicializo un mensaje vacio.
  let mensaje = "";
  // recorro el arreglo de usuariosLocalPrecarga
  for (let i = 0; i < usuariosLocalPrecarga.length; i++) {
    // guardo en variable el usuario en el que estoy iterando
    const usuarioActualPrecargado = usuariosLocalPrecarga[i];

    // chequeo que ninguno de los datos que se enviaran al constructor sea nulo o undefined
    let hayNulosOIndefinidos = false;
    //recorro los valores del usuario en el que itero y si alguno es null o indefinido paro a true la variable
    for (let o = 0; o < 7; o++) {
      if (
        usuarioActualPrecargado[o] == null ||
        usuarioActualPrecargado[o] == undefined
      ) {
        hayNulosOIndefinidos = true;
      }
    }
    //si no hay undefined paso al siguiente campo
    // campos a controlar en orden
    //nombre de usuario, password, nombre, direccion, cupos maximos, foto, tipo de local
    if (!hayNulosOIndefinidos) {
      // chequeo que el nombre de usuario no este vacio
      let nombreDeUsuarioNoEstaVacio = usuarioActualPrecargado[0] != "";

      if (nombreDeUsuarioNoEstaVacio) {
        //controlo que no exista ese nombre de usuario
        let noExisteNombreDeUsuario = !existeUsuario(
          usuarioActualPrecargado[0]
        );

        if (noExisteNombreDeUsuario) {
          // controlo que el password no este vacio
          let passwordNoEstaVacio = usuarioActualPrecargado[1] != "";

          if (passwordNoEstaVacio) {
            //controlo que el password sea valido

            let validoPasswordIngresado =
              validarPassword(usuarioActualPrecargado[1]).id == 0;

            if (validoPasswordIngresado) {
              // controlo que el nombre no sea vacio y sea de largo mayor a una letra.

              let nombreLocalValido =
                usuarioActualPrecargado[2] != "" &&
                usuarioActualPrecargado[2].length > 1;

              if (nombreLocalValido) {
                // controlaba que la direccion no sea nula o vacia este paso sera comentado ya que es innecesario.
                // debido a que se controla previamente.
                // if (
                //   usuarioActualPrecargado[3] != null &&
                //   usuarioActualPrecargado[3] != undefined
                // ) {

                // Controlo que el cupo maximo sea valido
                let validoCupomaximoLocal =
                  usuarioActualPrecargado[4] >= 0 &&
                  !isNaN(usuarioActualPrecargado[4]) &&
                  usuarioActualPrecargado[4] !== "";

                if (validoCupomaximoLocal) {
                  // controlaba que la foto no sea nula o vacia este paso sera comentado ya que es innecesario.
                  // debido a que se controla previamente.
                  // if (
                  //   usuarioActualPrecargado[5] != null &&
                  //   usuarioActualPrecargado[5] != undefined
                  // ) {
                  // controlo que el id de tipo lcoal exista en el arreglo de tipos de local
                  let validoTipoLocalId = existeTipoDeLocalId(
                    usuarioActualPrecargado[6]
                  );
                  if (validoTipoLocalId) {
                    // si paso todos los controles guardo el usuario local en ela rreglo de usaurios local

                    usuariosLocal.push(
                      new UsuarioLocal(
                        usuarioActualPrecargado[0],
                        usuarioActualPrecargado[1],
                        usuarioActualPrecargado[2],
                        usuarioActualPrecargado[3],
                        usuarioActualPrecargado[4],
                        usuarioActualPrecargado[5],
                        usuarioActualPrecargado[6]
                      )
                    ); //
                  } else {
                    mensaje =
                      "El tipo de local debe ser numerico y existir en la tabla de tipos de local";
                  }
                  // } else {
                  //   console.warn("La foto no puede ser nula o indefinida.");
                  // }
                } else {
                  mensaje =
                    "Los cupos maximos deben ser numeros mayores o iguales a 0";
                }
                // } else {
                //   console.warn("La direccion no puede ser nula o indefinida.");
                // }
              } else {
                mensaje =
                  "El nombre no debe estar vacío y debe tener al menos 1 letra o numero.";
              }
            } else {
              mensaje = "El password no cumple los requisitos.";
            }
          } else {
            mensaje = "El password no debe estar vacío.";
          }
        } else {
          mensaje = "El usuario ya existe.";
        }
      } else {
        mensaje = "El usuario no debe estar vacío.";
      }
    } else {
      mensaje =
        "No se aceptan datos nulos de (nombre de usuario, password, nombre, direccion, cupos maximos, foto, tipo de local)";
    }

    //si el mensaje es diferente a vacio largo el console warm con dicho mensaje
    if (mensaje != "") {
      console.warn(mensaje);
    }
  }
}

// funcion que verifica si existe dicho tipo de local ID en el arreglo de tipos local
function existeTipoDeLocalId(id) {
  let retorno = false;
  for (let i = 0; i < tiposDeLocal.length; i++) {
    if (tiposDeLocal[i].id == id) {
      retorno = true;
    }
  }
  return retorno;
}

//              Carga de usuarios persona
// -------------------------------------------------
function precargarUsuarioPersona() {
  // nombre de usuario, password, nombre

  usuariosPersonaPrecarga.push(["Usuario8", "Juan1234", "Juan"]); // id 8
  usuariosPersonaPrecarga.push(["Usuario9", "Mario1234", "Mario"]); // id 9
  usuariosPersonaPrecarga.push(["Usuario10", "Pedro1234", "Pedro"]); // id 10
  usuariosPersonaPrecarga.push(["Usuario11", "Ana1234", "Ana"]); // id 11
  usuariosPersonaPrecarga.push(["Usuario12", "Lucia1234", "Lucia"]); // id 12
  usuariosPersonaPrecarga.push(["Usuario13", "Franco1234", "Franco"]); // id 13
  usuariosPersonaPrecarga.push(["Usuario14", "Jose1234", "Jose"]); // id 14

  // prueba errores

  //Usuario
  usuariosPersonaPrecarga.push(["Usuario8", "Juan1234", "Juan"]); // id 8
  usuariosPersonaPrecarga.push(["", "Mario1234", "Mario"]); // id 9

  //Pasword
  usuariosPersonaPrecarga.push(["Usuario15", "uan1234", "Juan"]); // id 8
  usuariosPersonaPrecarga.push(["Usuario16", "Marioss", "Mario"]); // id 9
  usuariosPersonaPrecarga.push(["Usuario17", "arioss", "Mario"]); // id 9
  usuariosPersonaPrecarga.push(["Usuario18", "ari", "Mario"]); // id 9
  usuariosPersonaPrecarga.push(["Usuario19", "1234567", "Mario"]); // id 9

  //Nombre

  usuariosPersonaPrecarga.push(["Usuario20", "Franco1234", ""]); // id 13
  usuariosPersonaPrecarga.push(["Usuario21", "Jose1234", "J"]); // id 14

  controlPrecargaUsuarioPersona();

  // nombre de usuario, password, nombre
  // usuariosPersona.push(new UsuarioPersona("Usuario8","Juan1234","Juan")); // id 8
  // usuariosPersona.push(new UsuarioPersona("Usuario9","Mario1234","Mario")); // id 9
  // usuariosPersona.push(new UsuarioPersona("Usuario10","Pedro1234","Pedro")); // id 10
  // usuariosPersona.push(new UsuarioPersona("Usuario11","Ana1234","Ana")); // id 11
  // usuariosPersona.push(new UsuarioPersona("Usuario12","Lucia1234","Lucia")); // id 12
  // usuariosPersona.push(new UsuarioPersona("Usuario13","Franco1234","Franco")); // id 13
  // usuariosPersona.push(new UsuarioPersona("Usuario14","Jose1234","Jose")); // id 14
}

function controlPrecargaUsuarioPersona() {
// inicializo mensaje en vacio
let mensaje = "";
  // recorro el arreglo de usuariosPersonaPrecarga
  for (let i = 0; i < usuariosPersonaPrecarga.length; i++) {
    // guardo en variable el usuario en el que estoy iterando

    const usuarioActualPrecargado = usuariosPersonaPrecarga[i];

// recorro los datos del usuario persona actual y verifico que no esten nulos o indefinidos
let usuarioActualEsNuloOIndefinido = false

for (let o = 0; o < 3; o++) {
    if(usuarioActualPrecargado[o] == null || usuarioActualPrecargado[o] == undefined){
        usuarioActualEsNuloOIndefinido = true;
    }
    
}
// si todos los datos se ingresaron correctamente
//nombre de usuario, password, nombre
// comienzo a validar el resto.
    if(!usuarioActualEsNuloOIndefinido){

    // verifico si el nombre de usaurio es distinto de vacio.
    let nombreDeUsuarioNoEstaVacio = usuarioActualPrecargado[0] != "";
            if (nombreDeUsuarioNoEstaVacio) {
                // verifico si no existe nombre de usaurio en los arreglos de usuarios
                let noExisteNombreDeUsuario = !existeUsuario(usuarioActualPrecargado[0]);

            if (noExisteNombreDeUsuario) {
                // verifico que el password no este vacio
                let passwordNoEstaVacio =usuarioActualPrecargado[1] != "";

                if (passwordNoEstaVacio) {
                    // valido que el password este correcto
                    let validoPasswordUsuarioPersona = validarPassword(usuarioActualPrecargado[1]).id == 0;
                
                if (validoPasswordUsuarioPersona) {
                    // verifico que el nombre ingresado sea de al menos dos caracteres y no este vacio
                    let verificoNombreUsuarioPersona = usuarioActualPrecargado[2] != "" &&
                    usuarioActualPrecargado[2].length > 1;
                    if (verificoNombreUsuarioPersona) {

                        // si todos los datos enviados al cosntructor son correctos  guardo el objeto en el arrelo de usuarios persona

                    usuariosPersona.push(
                        new UsuarioPersona(
                        usuarioActualPrecargado[0],
                        usuarioActualPrecargado[1],
                        usuarioActualPrecargado[2]
                        )
                    );
                    } else {
                        mensaje = 
                        "El nombre no debe estar vacío y debe tener al menos 2 letras (Persona)."
                    ;
                    }
                } else {
                    mensaje = "El password no cumple los requisitos (Persona).";
                }
                } else {
                    mensaje = "El password no debe estar vacío (Persona).";
                }
            } else {
                mensaje = "El usuario ya existe (Persona).";
            }
            } else {
                mensaje = "El usuario no debe estar vacío.(Persona).";
            }
    }else{
        mensaje = "Los datos de usuario Persona no pueden ser nulos o indefinidos (nombre de usuario, password, nombre)";
    }

     //si el mensaje es diferente a vacio largo el console warm con dicho mensaje
     if (mensaje != "") {
        console.warn(mensaje);
      }
  }
}

// -------------------------------------------------
//              Carga de Reservas
// -------------------------------------------------
function precargarReservas() {
  //usuario, local, cupos

  // reservas pendientes
reservasPrecarga.push([8, 1, 11]); // id 1
reservasPrecarga.push([9, 2, 5]); // id 2
reservasPrecarga.push([10, 3, 10]); // id 3
reservasPrecarga.push([11, 4, 3]); // id 4
reservasPrecarga.push([12, 6, 7]); // id 5
    // reserva finalizadas
reservasPrecarga.push([11, 5, 5]); // id 6
reservasPrecarga.push([12, 7, 15]); // id 7
   // reserva canceladas
reservasPrecarga.push([8, 2, 7]); // id 8
 
// errores generados
// datos
reservasPrecarga.push([]);
reservasPrecarga.push([null,null,null]);
reservasPrecarga.push([undefined,undefined,undefined]);
reservasPrecarga.push([,,]);
reservasPrecarga.push(['a','b','c']);
reservasPrecarga.push(['','','']);

// usuario id
reservasPrecarga.push([1,1,30]);

//local
reservasPrecarga.push([8,13,30]);

// si ya realizo reservas el usuario en el local
reservasPrecarga.push([8,1,3]);
// si supera los cupos
reservasPrecarga.push([8,1,30]);
//si los cupos es negativo
reservasPrecarga.push([8,3,-3]);



  // carga de datos anterior
   //usuario, local, cupos
//   reservas.push(new Reserva(8, 1, 11)); // id 1
//   reservas.push(new Reserva(9, 2, 5)); // id 2
//   reservas.push(new Reserva(10, 3, 10)); // id 3
//   reservas.push(new Reserva(11, 4, 3)); // id 4
//   reservas.push(new Reserva(12, 6, 7)); // id 5

//   // reserva finalizadas
//   reservas.push(new Reserva(11, 5, 5)); // id 6
//   reservas[5].finalizarReserva();
//   reservas.push(new Reserva(12, 7, 15)); // id 7
//   reservas[6].finalizarReserva();

//   // reserva canceladas
//   reservas.push(new Reserva(8, 2, 7)); // id 8
//   reservas[7].cancelarReserva();


  controlPrecargareservas();


  // reserva finalizadas
let idsReservasAFinalizar= [5,6];

// error de reserva a finalizar
idsReservasAFinalizar.push(10);

for (let i = 0; i < idsReservasAFinalizar.length; i++) {
    if(existeIdDeReserva(idsReservasAFinalizar[i])){
        reservas[idsReservasAFinalizar[i]].finalizarReserva();
    }else{
        console.warn('no existe id de reserva a finalizar')
    }
    
}

  // reserva canceladas
let idsReservasACancelar= [7];

// error de reserva a finalizar
idsReservasACancelar.push(10);

for (let i = 0; i < idsReservasACancelar.length; i++) {
    if(existeIdDeReserva(idsReservasACancelar[i])){
        reservas[idsReservasACancelar[i]].finalizarReserva();
    }else{
        console.warn('no existe id de reserva a Cancelar')
    }
    
}

  // reserva finalizadas
//   reservas[5].finalizarReserva();
//   reservas[6].finalizarReserva();
//    // reserva canceladas
//   reservas[7].cancelarReserva();

}
// funcion para verificar si existe id de reserva
function existeIdDeReserva(pId){
    let existeId = false;
    // recorro el arrelo de reservas
for (let i = 0; i < reservas.length; i++) {
    // si existe paso variable a true
    if(pId == reservas[i].id){
         existeId = true;
    }
}
return existeId;
}

//funcion para controlar la carga de reservas
function controlPrecargareservas(){
//  inicializo mensaje vacio
mensaje = '';

// recorro el arreglo de reservas precarga para verificar cada una de ellas

for (let i = 0; i < reservasPrecarga.length; i++) {
    // Guardo la reserva actual en variable
    const reservaPrecargadaActual = reservasPrecarga[i];
    
    // recorro los datos de la reserva actual para verificar que ninguno sea nulo o indefinido y que todos sean numericos 
//usuario, local, cupos
let reservaactualEsNuloOIndefinidaONaN = false
    for (let o = 0; o < 3; o++) {
        if(reservaPrecargadaActual[o] == null || reservaPrecargadaActual[o]== undefined || !isNaN(reservaPrecargadaActual[o] ) && reservaPrecargadaActual[o] == ''|| isNaN(reservaPrecargadaActual[o] ) ){
            reservaactualEsNuloOIndefinidaONaN = true;
        }     
    }
// verifico si recibo los datos numericos en las reservas y correctamente
    if(!reservaactualEsNuloOIndefinidaONaN){
        // valido que exista el usuario ID y que sea persona
        let validoUsuarioPersona = buscarUsuarioPorID(usuariosPersona,reservaPrecargadaActual[0]) != null;
        if(validoUsuarioPersona){
            // valido que exista el id de local
           let  validoLocal = buscarUsuarioPorID(usuariosLocal,reservaPrecargadaActual[1]) != null;
            if(validoLocal){
                //valido los cupos disponibles

                //me fijo que los cupos sean mayores a 0
                if(reservaPrecargadaActual[2] > 0){
                
                    // busco los cupos disponibles del lcoal actual
                    
                            let cuposDisponiblesActuales = cuposDisponibles(reservaPrecargadaActual[1]);
                            // chequeo que los cupos no sean mayores a los del local
                            if (cuposDisponiblesActuales >= reservaPrecargadaActual[2]) {
                                // verifico si no existe reserva de usaurio en local
                                let noExistereservaEnLocal =
                                !verificarSiExisteReservaDeUsuarioEnLocal(
                                    reservaPrecargadaActual[0],
                                    reservaPrecargadaActual[1]
                                )

                                if (noExistereservaEnLocal) {
                                    // si todo esta correcto pusheo la reserva
                                reservas.push(
                                    new Reserva(reservaPrecargadaActual[0], reservaPrecargadaActual[1], reservaPrecargadaActual[2])
                                );
                                // console.log('reservado');

                                if (cuposDisponiblesActuales == reservaPrecargadaActual[2]) {
                                    buscarLocalPorID(reservaPrecargadaActual[1]).deshabilitarLocal();
                                    mensaje +=
                                    "Se ha alcanzado el cupo maximo del local, el mismo se deshabilitara.(reserva)";
                                }

                                } else {
                                mensaje = "Ya realizo reservas en ese local(reserva)";
                                }
                            } else {
                                mensaje =
                                "Los cupos seleccionados superan la disponibilidad del local. Cupos disponibles: " +
                                cuposDisponiblesActuales +
                                ".(reserva)";
                            }

                        }else{
                            mensaje = 'Los cupos deben ser mayores a 0 (Reserva)'; 
                        }
            }else{
                mensaje = "No existe el id de Local.(reserva)" ;
            }
       
        }else{
            mensaje = "No existe el id en Usuarios persona.(reserva)"
        }

    }else{
        mensaje = "Los datos de las reservas deben ser numericos, no nulos ni indefinidos(usuario id, local id, cupos)"
    }


      //si el mensaje es diferente a vacio largo el console warm con dicho mensaje
      if (mensaje != "") {
        console.warn(mensaje);
      }
}




}

// -------------------------------------------------
//             Manejo De botones
// -------------------------------------------------

function cargarClickEnBotones() {
  // Menu
  document
    .querySelector("#btnMenuLogin")
    .addEventListener("click", btnMenuLoginHandler);
  document
    .querySelector("#btnMenuRegistro")
    .addEventListener("click", btnMenuRegistroHandler);
  document
    .querySelector("#btnMenuHome")
    .addEventListener("click", btnMenuHomeHandler);

  document
    .querySelector("#btnMenuCerrarSesion")
    .addEventListener("click", btnMenuCerrarSesionHandler);

  //REGISTRO
  document
    .querySelector("#btnRegistrarse")
    .addEventListener("click", btnRegistrarseHandler);

  // LOGIN
  document
    .querySelector("#btnLoginIngresar")
    .addEventListener("click", btnLoginIngresarHandler);
  // Persona
  // --------------------
  // Reservar
  document
    .querySelector("#btnReservarPersonaMenu")
    .addEventListener("click", btnReservarPersonaMenuHandler);
  // Estadistica
  document
    .querySelector("#btnEstadisticasPersonaMenu")
    .addEventListener("click", btnEstadisticasPersonaMenuHandler);
  // reservas pendientes
  document
    .querySelector("#btnReservasPendientesPersonaMenu")
    .addEventListener("click", btnReservasPendientesPersonaMenuHandler);
  // reservas finalizadas
  document
    .querySelector("#btnReservasFinalizadasPersonaMenu")
    .addEventListener("click", btnReservasFinalizadasPersonaMenuHandler);

  // Local
  // --------------------

  // Estadistica
  document
    .querySelector("#btnEstadisticasLocalMenu")
    .addEventListener("click", btnEstadisticasLocalMenuHandler);
  // Administrar Reservas
  document
    .querySelector("#btnAdministrarReservasLocalMenu")
    .addEventListener("click", btnAdministrarReservasLocalMenuHandler);
  //Administrar local
  document
    .querySelector("#btnAdministrarLocalMenu")
    .addEventListener("click", btnAdministrarLocalMenuHandler);
  document
    .querySelector("#btnBuscarReservasEnLocal")
    .addEventListener("click", btnBuscarReservasEnLocalHandler);

  document
    .querySelector("#btnModificarCupoMaximo")
    .addEventListener("click", btnModificarCupoMaximoHandler);
}

// -------------------------------------------------
//             Manejo de Select
// -------------------------------------------------

function cargarEventosEnSelect() {
  document
    .querySelector("#habilitarDisponibilidad")
    .addEventListener("change", selectHabilitarDisponibilidadHandler);
}

// -------------------------------------------------
//             Eventos De botones Menu
// -------------------------------------------------

function btnMenuLoginHandler() {
  mostrarLogin();
  // usuario harcodeado
  // local
  document.querySelector('#txtLoginUsuario').value = "Usuario1"
  document.querySelector('#txtLoginPassword').value = "Paponita123"
  //  persona
  // document.querySelector("#txtLoginUsuario").value = "Usuario8";
  // document.querySelector("#txtLoginPassword").value = "Juan1234";
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
    mostrarListadoDeLocalesConReservasHechas();
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
    porcentajeDeOcupacionEnUnLocal();
    mostrarPromedioLocalLogueado(usuarioLogueado.id);
    mostrarListadoDePromedioDeCalificacionesDeLocales();
    mostrarTotalDeReservasRealizadasEnElLocal();

}
function btnAdministrarReservasLocalMenuHandler() {
    ocultarPantallas();
    completarTablaReservasSegunEstadoYUsuario(1, usuarioLogueado.tipoUsuarioId);
    // console.log(usuarioLogueado.tipoUsuarioId);
    document.querySelector("#cabezalLocal").style.display = "block";
    document.querySelector("#adminReserva").style.display = "block";

}

function btnBuscarReservasEnLocalHandler() {
  let texto = document.querySelector("#buscadorDeReservas").value;
  if (texto != "") {
    console.log("buscar ", texto);
    completarTablaReservasPendientesLocalPorNombre(texto);
  }else{
    
    btnAdministrarReservasLocalMenuHandler();
  }
}


function btnAdministrarLocalMenuHandler() {
    ocultarPantallas();

  document.querySelector("#cabezalLocal").style.display = "block";
  document.querySelector("#administrarLocal").style.display = "block";
  document.querySelector("#txtCupoMaximo").value = usuarioLogueado.cupoMaximo;
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
  document.querySelector("#verDatosLocalAReservar").style.display = "none";
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
        subCadenas++;
      }
    }

    // console.log('sub', subCadenas);
    if (subCadenas > 0) {
      return { key: 1, msj: "Se encontraron coincidencias" };
    } else {
      return { key: 2, msj: "No se encontraron coincidencias" };
    }
  } else {
    return { key: 0, msj: "Datos insuficientes." };
  }
}

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
    if (
      usuarioActual.nombreUsuario.toLowerCase() == nombreUsuario.toLowerCase()
    ) {
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
    if (!isNaN(nombre[i]) && nombre[i] != '') {
      tieneNumeros = true;

    }
  }


  if (tieneAlMenosDosCaracteres && !tieneNumeros) {
    return true;
  } else {
    return false;
  }
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

    if (!isNaN(pass[i]) && pass[i] !='') {
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


// Funcion que completa tablas y genera botones en pantalla dependiendo del estado de la reserva que se pasa  y el tipo de usuario.

function completarTablaReservasSegunEstadoYUsuario(pEstado, pTipoUsuario) {
  //  se inicializa vacío el HTML que se enviara a los diferentes menús del programa.
  let bodyHTML = "";

  // recorro el arreglo de reservas
  for (let i = 0; i < reservas.length; i++) {
    // guardo la reserva de esta iteración
    let reservaActual = reservas[i];
    // tomo su estado
    let estadoReserva = reservaActual.estado;

    // tomo el id de usuario persona de la reserva
    let idUsuarioReserva = reservaActual.usuarioID;
    // tomo el id de usuario local de la reserva
    let idLocalReserva = reservaActual.localID;


    // 1 - tabla reservas pendientes persona.
    //----------------------------------------------------------

     //  si el estado es 1 "pendiente", el id de usuario de la reserva es igual al id de usuario logueado y el tipo de usuario es 2 (persona)
    //  creo la fila correspondiente en la tabla.
    if (estadoReserva == pEstado) {
      if (
        pEstado == 1 &&
        pTipoUsuario == 2 &&
        idUsuarioReserva == usuarioLogueado.id
      ) {
        // nombre del boton que se creara en la tabla.
        let textoBoton = "Cancelar";

        // Creacion del html de la fila.
        bodyHTML += `
                    <tr>
                        <td>
                        <img id="imgAReservar" width="300px" src="./img/${
                          buscarLocalPorID(reservaActual.localID).foto
                        }" alt="foto del local">
                        </td>
                        <td>
                            ${buscarLocalPorID(reservaActual.localID).nombre}
                        </td>
                        <td>
                            ${reservaActual.cupos}
                        </td>
                        <td>
                        <input data-usuario="${
                          reservaActual.id
                        }" type="button" value="${textoBoton}" class="btnCancelarReserva">
                    </td>
                    </tr>
                    `;
      }

    // 2 - Tabla puntuar reserva persona.
    //----------------------------------------------------------

    //  Si el estado es 2 "finalizado", el id de usuario de la reserva es igual al id de usuario logueado y el tipo de usuario es 2
    //  (poersona) creo la fila correspondiente en la tabla.
      if (
        pEstado == 2 &&
        pTipoUsuario == 2 &&
        idUsuarioReserva == usuarioLogueado.id
      ) {
        // Nombre de los botones que se crearan en la tabla.
        let textoBoton = "Puntuar";
        let calificacion = "Sin calificar";
        let data = [i, reservaActual.id];

        // creación del html de la fila
        
        // si el puntaje de la reserva es distinto de 0
        // significa que fue puntuada y guardo en la variable calificación
        // dicho valor.
        if (reservaActual.calificacion != 0) {
          calificacion = reservaActual.calificacion;
        }

        // utilizo el i de la interacción para generar los id de los input de cada reserva.

        bodyHTML += `
                            <tr>
                                    <td>
                                        <img id="imgAReservar" width="300px" src="./img/${
                                          buscarLocalPorID(
                                            reservaActual.localID
                                          ).foto
                                        }" alt="foto del local">
                                        </td>
                                        <td>
                                            ${
                                              buscarLocalPorID(
                                                reservaActual.localID
                                              ).nombre
                                            }
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
  // 3 - Tabla finalizar reserva Local.
  //----------------------------------------------------------
  //  Si el estado es 1 "Pendiente", el id de local de la reserva es igual al id de usuario logueado y el tipo de usuario es 1
  //  (local)creo la fila correspondiente en la tabla.
      if (
        pEstado == 1 &&
        pTipoUsuario == 1 &&
        idLocalReserva == usuarioLogueado.id
      ) {
        // nombre de los botones que se crearan en la tabla
        let textoBoton = "Finalizar";
        // creacion del html de la fila
        bodyHTML += `
                                        <tr>
                                            <td>
                                                ${
                                                  buscarUsuarioPorID(
                                                    usuariosPersona,
                                                    reservaActual.usuarioID
                                                  ).nombre
                                                }

                                            </td>
                                            <td>
                                                ${reservaActual.cupos}
                                            </td>
                                            <td>
                                            <input data-usuario="${
                                              reservaActual.id
                                            }" type="button" value="${textoBoton}" class="btnFinalizarReserva">
                                        </td>
                                        </tr>
                                        `;

      }
    }
  }

  // 1 - tabla reservas pendientes.(botones)
    //----------------------------------------------------------
  if (pEstado == 1 && pTipoUsuario == 2) {
    //si el estado de la reserva es pendiente y el usuario es una persona
    // Agrego el html generado de la tabla anterior.
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

// 2 - Tabla puntuar reserva.
//----------------------------------------------------------
  if (pEstado == 2 && pTipoUsuario == 2) {
     //si el estado de la reserva es finalizada y el usuario es una persona
    // Agrego el html generado de la tabla anterior.
    
    document.querySelector("#bodyTablaPuntuarReservasFinalizadas").innerHTML =
      bodyHTML;

    let arrayDeBotones = document.querySelectorAll(".btnPuntuarReserva");

    for (let i = 0; i < arrayDeBotones.length; i++) {
      // guardo el boton actual en variable
      let botonActual = arrayDeBotones[i];
      // le agrego evento click al boton actual
      botonActual.addEventListener("click", btnPuntuarReservaHandler);
    }

// 3 - Tabla finalizar reserva Local.
//----------------------------------------------------------
 
  if (pEstado == 1 && pTipoUsuario == 1) {
    //si el estado de la reserva es pendiente y el usuario es un local
    // Agrego el html generado de la tabla anterior.
    document.querySelector("#bodyTablaReservasPendientesLocal").innerHTML =
      bodyHTML;

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
}

// -------------------------------------------------
//             Registro de Usuario Persona
// -------------------------------------------------

// funcion del evento del boton para registrar un usuario Persona
function btnRegistrarseHandler() {

  let mensaje = "";
  let mensajePassword =
    "La contraseña deberá tener al menos 6 caracteres, una mayúscula, una minúscula y un número";
  const usuarioIngresado = document.querySelector("#txtRegistroUsuario").value;
  const passwordIngresado = document.querySelector(
    "#txtRegistroPassword"
  ).value;
  const nombreIngresado = document.querySelector("#txtRegistroNombre").value;

  if (
    usuarioIngresado !== "" &&
    passwordIngresado !== "" &&
    nombreIngresado !== ""
  ) {
    //condicional para validar si el nombre de usuario coincide con uno ya creado previamente
    if (!existeUsuario(usuarioIngresado)) {
      let retorno = validarPassword(passwordIngresado);
      if (retorno.id == 0) {
        let nombreEsValido = validarNombre(nombreIngresado);
        if (nombreEsValido == true) {
          //si no existe un usuario persona o local con el mismo nombre, creamos un nuevo usuario con el nombre y contraseña ingresados
          registrarUsuarioPersona(
            usuarioIngresado,
            passwordIngresado,
            nombreIngresado
          );
          mensaje = "Usuario registrado";
          vaciarCampos();
        } else {
          mensaje =
            "El Nombre debe tener al menos dos letras y no contener números.";

        }
      } else {
        mensaje = mensajePassword + ", (" + retorno.msj + ")";
      }
    } else {
      //si hay coincidencia de nombre de usuario local o persona, se muestra el mensaje
      mensaje = "El usuario ya existe";
    }

  } else {
    mensaje = "Todos los campos son obligatorios.";
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
  let usuarioLocalEncontrado = buscarUsuarioPorNombre(
    usuariosLocal,
    nombreUsuario
  );
  //busqueda en listado de usuarios Persona
  let usuarioPersonaEncontrado = buscarUsuarioPorNombre(
    usuariosPersona,
    nombreUsuario
  );
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

  // console.log('prueba');
  let mensaje = "";

  const usuarioIngresado = document.querySelector("#txtLoginUsuario").value;
  const passwordIngresado = document.querySelector("#txtLoginPassword").value;

  let usuarioEncontradoPorNombre = null;

  if (usuarioIngresado != "" && passwordIngresado != "") {
    let usuarioLocalEncontrado = buscarUsuarioPorNombre(
      usuariosLocal,
      usuarioIngresado
    );
    let usuarioPersonaEncontrado = buscarUsuarioPorNombre(
      usuariosPersona,
      usuarioIngresado
    );

    if (usuarioLocalEncontrado != null) {
      usuarioEncontradoPorNombre = usuarioLocalEncontrado;
    } else if (usuarioPersonaEncontrado != null) {
      usuarioEncontradoPorNombre = usuarioPersonaEncontrado;
    } else {
      mensaje = "El usuario ingresado no existe.";
    }

    if (
      usuarioEncontradoPorNombre &&
      usuarioEncontradoPorNombre.password == passwordIngresado
    ) {
      usuarioLogueado = usuarioEncontradoPorNombre;
      if (usuarioLogueado.tipoUsuarioId == 1) {
        usuarioEstaLogueado = true;
        mostrarPantallaLocalLogueado();
      } else if (usuarioLogueado.tipoUsuarioId == 2) {
        usuarioEstaLogueado = true;
        mostrarPantallaPersonaLogueada();
      }
    } else if (mensaje == "") {
      mensaje = "La contraseña no es correcta.";
    }
  } else {
    mensaje = "Todos los datos son obligatorios.";
  }


  document.querySelector("#divLoginMensajes").innerHTML = mensaje;
}

// -------------------------------------------------
//             Funciones de Persona
// -------------------------------------------------

function btnPuntuarReservaHandler() {
  console.log("puntuar");

  // Obtengo el valor del atributo data-usuario que tiene el botón que disparó el evento (click)
  // devuelve el id de la reserva
  let datosReservaActual = this.getAttribute("data-usuario");

  //busco la reserva a puntuar
  let reservaAPuntuar = buscarReservaPorID(datosReservaActual[2]);
  console.log(reservaAPuntuar);

  let inputsCalificacion = document.querySelectorAll(
    `input[name=numero${datosReservaActual[0]}]`
  );
  // console.table(inputsCalificacion);
  for (let i = 0; i < inputsCalificacion.length; i++) {
    if (inputsCalificacion[i].checked == true) {
      console.log("cheauqeado " + inputsCalificacion[i].value);
      if (
        !isNaN(inputsCalificacion[i].value) &&
        inputsCalificacion[i].value != ""
      ) {
        reservaAPuntuar.calificar(parseInt(inputsCalificacion[i].value));
      }
    }
  }
  // aplico el metodo cancelar en la reserva obtenida

  // reservaACancelar.finalizarReserva();

  // recargo la lista
  completarTablaReservasSegunEstadoYUsuario(2, usuarioLogueado.tipoUsuarioId);
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
  // completarTablaReservasPendientes();
  completarTablaReservasSegunEstadoYUsuario(1, usuarioLogueado.tipoUsuarioId);
}

function verificarSiExisteReservaDeUsuarioEnLocal(pIdUsuario, pIdLocal) {

  let tieneReservasHechas = false;
  for (let i = 0; i < reservas.length; i++) {
    if (
      pIdUsuario == reservas[i].usuarioID &&
      pIdLocal == reservas[i].localID &&
      reservas[i].estado == 1
    ) {
      tieneReservasHechas = true;

    }
  }
  return tieneReservasHechas;
}

function btnReservarEnLocalHandler() {
  let mensaje = "";
  let cuposParaReservar = document.querySelector("#txtReservarEnLocal").value;
  let data = this.getAttribute("data-usuario");

  if (cuposParaReservar != "") {
    if (!isNaN(cuposParaReservar)) {
      let cuposParaReservarInt = parseInt(cuposParaReservar);
      if (cuposParaReservarInt > 0) {
        if (!isNaN(data) && data != "") {
          let dataInt = parseInt(data);

          let cuposDisponiblesActuales = cuposDisponibles(dataInt);

          if (cuposDisponiblesActuales >= cuposParaReservarInt) {
            if (
              !verificarSiExisteReservaDeUsuarioEnLocal(
                usuarioLogueado.id,
                dataInt
              )
            ) {
              reservas.push(
                new Reserva(usuarioLogueado.id, dataInt, cuposParaReservarInt)
              );
              // console.log('reservado');
              mensaje = "Reserva realizada con exito.";

              if (cuposDisponiblesActuales == cuposParaReservarInt) {
                buscarLocalPorID(dataInt).deshabilitarLocal();
                mensaje +=
                  "Se ha alcanzado el cupo maximo del local, el mismo se deshabilitara.";
              }
              let boton = document.querySelector("#btnReservarEnLocal");
              boton.disabled = true;
            } else {
              console.error("Ya realizo reservas en ese local");
            }
          } else {
            mensaje =
              "Los cupos seleccionados superan la disponibilidad del local. Cupos disponibles: " +
              cuposDisponiblesActuales +
              ".";
          }
        } else {
          console.error("Error en la data-usuario del input");
        }
      } else {
        mensaje = "Debe ingresar un cupo mayor o igual a 1.";
      }
    } else {
      mensaje = "Debe ingresar un numero en el campo de cupos.";
    }
  } else {
    mensaje = "El campo de cupos no debe estar vacio.";
  }
  document.querySelector("#pMensajeReservarEnLocal").innerHTML = mensaje;
}

function generarTablaReservas() {
  let bodyHTML = "";
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
    if (
      localHabilitado &&
      !usuarioLogueadoTieneReservasPendientesEnLocal(localActual.id)
    ) {
      let textoBoton = "Ver";
      // creacion del html de la fila
      // sustitur imagen por url real
      bodyHTML += `
                                            <tr>
                                                <td>
                                                <img  src="./img/${
                                                  localActual.foto
                                                }" alt="foto del local">
                                                </td>
                                                <td>
                                                    ${localActual.nombre}
                                                </td>
                                                <td>
                                                    ${obtenerTipoDeLocalPorId(
                                                      localActual.tipoLocal
                                                    )}
                                                </td>
                                                <td>
                                                ${disponibilidad}
                                                </td>
                                                <td>
                                                <input data-usuario="${
                                                  localActual.id
                                                }" type="button" value="${textoBoton}" class="btnVerDatosLocal">
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
  let data = this.getAttribute("data-usuario");
  console.log(data);
  ocultarPantallas();
  document.querySelector("#cabezalPersona").style.display = "block";
  generarDivVerDatosLocalAReservar(data);
  document.querySelector("#verDatosLocalAReservar").style.display = "Block";
}

function generarDivVerDatosLocalAReservar(idLocal) {
  let localAMostrar = buscarLocalPorID(idLocal);
  let bodyHtml = "";
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
    <img id="imgAReservar" width="300px" src="./img/${
      localAMostrar.foto
    }" alt="foto del local">
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
   
    `;
  }

  document.querySelector("#verDatosLocalAReservar").innerHTML = bodyHtml;

  if (bodyHtml != "") {
    document
      .querySelector("#btnReservarEnLocal")
      .addEventListener("click", btnReservarEnLocalHandler);
  }
}

function usuarioLogueadoTieneReservasPendientesEnLocal(localID) {
  for (let i = 0; i < reservas.length; i++) {
    // console.log(reservas[i].usuarioID,usuarioLogueado.id);
    // console.log(reservas[i].localID, localID);
    if (
      reservas[i].usuarioID == usuarioLogueado.id &&
      reservas[i].localID == localID &&
      reservas[i].estado == 1
    ) {
      return true;
    }
  }
  return false;
}
//--------------------------------------------------
// FUNCIONES DE RESERVAS
//--------------------------------------------------
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
// -------------------------------------------------
//             Funciones de Locales
// -------------------------------------------------

function btnFinalizarReservaHandler() {
  console.log("finalizar");

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

function generarSelectDinamicoHabilitarLocal() {
  let opciones = "";
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

    document.querySelector("#habilitarDisponibilidad").innerHTML = opciones;
  }
}

function selectHabilitarDisponibilidadHandler() {
  let valueDelSelect = document.querySelector("#habilitarDisponibilidad").value;

  if (
    (valueDelSelect != "" && valueDelSelect == "Habilitado") ||
    valueDelSelect == "Deshabilitado"
  ) {
    if (valueDelSelect == "Habilitado") {
      if (cuposDisponibles(usuarioLogueado.id) > 0) {
        usuarioLogueado.habilitarLocal();
        document.querySelector("#pMensajeHabilitarLocal").innerHTML =
          "Local Habilitado, con " +
          cuposDisponibles(usuarioLogueado.id) +
          " cupos disponibles.";

        console.log(usuarioLogueado);
        // console.log(cuposDisponibles(usuarioLogueado.id));
      } else {
        document.querySelector("#pMensajeHabilitarLocal").innerHTML =
          "El local a alcanzado el cupo maximo, y no podra habilitarse.";
        // generarSelectDinamicoHabilitarLocal();
        // console.log("el local no tiene cupos disponibles");
        document.querySelector("#habilitarDisponibilidad").value =
          "Deshabilitado";
        console.log(usuarioLogueado);
      }
    } else if (valueDelSelect == "Deshabilitado") {
      usuarioLogueado.deshabilitarLocal();
      document.querySelector("#pMensajeHabilitarLocal").innerHTML =
        "Local Deshabilitado, con " +
        cuposDisponibles(usuarioLogueado.id) +
        " cupos disponibles.";
      console.log(usuarioLogueado);
    }
  } else {
    console.log("El valor del select debe ser Habilitado o Deshabilitado");
  }
}

function btnModificarCupoMaximoHandler() {
  let cupoAModificar = document.querySelector("#txtCupoMaximo").value;

  if (cupoAModificar != "") {
    if (!isNaN(cupoAModificar) && cupoAModificar >= 0) {
      let cupoAModificarInt = parseInt(cupoAModificar);

      if (usuarioLogueado != null) {
        if (
          cuposDisponibles(usuarioLogueado.id) == usuarioLogueado.cupoMaximo
        ) {
          let cupoActual = usuarioLogueado.cupoMaximo;

          if (cupoActual != cupoAModificarInt) {
            usuarioLogueado.modificarCupoMaximo(cupoAModificarInt);
            document.querySelector(
              "#pMensajeModificarCupoMaximo"
            ).innerHTML = `Se modifico el cupo de ${cupoActual} a ${usuarioLogueado.cupoMaximo}`;
          } else {
            document.querySelector("#pMensajeModificarCupoMaximo").innerHTML =
              "El cupo ingresado es el mismo que el actual.";
          }
        } else {
          document.querySelector("#pMensajeModificarCupoMaximo").innerHTML =
            "No deben existir reservas pendientes para modificar el cupo maximo";
        }
      } else {
        document.querySelector("#pMensajeModificarCupoMaximo").innerHTML =
          "El usuario debe estar logueado";
      }
    } else {
      document.querySelector("#pMensajeModificarCupoMaximo").innerHTML =
        "El cupo maximo debe ser numerico y mayor a 0.";
    }
  } else {
    document.querySelector("#pMensajeModificarCupoMaximo").innerHTML =
      "El cupo maximo no debe estar vacio";
  }
}

function completarTablaReservasPendientesLocalPorNombre(subCadena) {
  console.log(subCadena);
  let bodyHTML = "";
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
    console.log(
      buscarSubCadenaEnTexto(
        buscarUsuarioPorID(usuariosPersona, reservaActual.usuarioID).nombre,
        subCadena
      ).key
    );

    if (
      estado == 1 &&
      localReservaId == usuarioLogueado.id &&
      buscarSubCadenaEnTexto(
        buscarUsuarioPorID(usuariosPersona, reservaActual.usuarioID).nombre,
        subCadena
      ).key == 1
    ) {
      let textoBoton = "Finalizar";
      // creacion del html de la fila
      // sustitur imagen por url real
      bodyHTML += `
                                        <tr>
                                            <td>
                                                ${
                                                  buscarUsuarioPorID(
                                                    usuariosPersona,
                                                    reservaActual.usuarioID
                                                  ).nombre
                                                }
                                            </td>
                                            <td>
                                                ${reservaActual.cupos}
                                            </td>
                                            <td>
                                            <input data-usuario="${
                                              reservaActual.id
                                            }" type="button" value="${textoBoton}" class="btnFinalizarReserva">
                                        </td>
                                        </tr>
                                        `;
    }
  }
  if(bodyHTML == ""){
    bodyHTML += ` <tr>
    <td COLSPAN="3">No hay coincidencias para esta búsqueda.
    </td>
</tr>
                                  `;
  }

  document.querySelector("#bodyTablaReservasPendientesLocal").innerHTML =
    bodyHTML;

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
// -------------------------------------------------
//            Funciones de Estadisticas Locales
// -------------------------------------------------

//esta funcion calcula el porcentaje de ocupacion en un local en base a las reservas pendientes
function porcentajeDeOcupacionEnUnLocal() {
    //reutilizamos la funcion que devuelve los cupos disponibles
    let mensaje = '';
    let cuposDisponiblesActuales = cuposDisponibles(usuarioLogueado.id);
    let cuposMaximosActuales = usuarioLogueado.cupoMaximo;
    let reservasPendientes = cuposMaximosActuales - cuposDisponiblesActuales;

    if (usuarioLogueado.tipoUsuarioId == 1 && cuposMaximosActuales > 0) {
        //redondeamos hacia el numero entero mas cercano
        let porcentajeOcupado = Math.round(reservasPendientes * 100 / cuposMaximosActuales);
        mensaje = 'El porcentaje de ocupación del local es: ' + porcentajeOcupado + '%';
    } else { mensaje = 'El usuario logeado es invalido'; }
    //regla de tres para calcular el porcentaje de ocupacion

    document.querySelector("#pPorcentajeDeOcpacion").innerHTML = mensaje;
}

//esta funcion hace un promedio de calificaciones solo para reservas finalizadas con calificacion hecha
function promedioDeCalificacionesEnUnLocal(idUsuarioLocal) {
    let contadorCalificacionesValidas = 0;
    let sumaTotalDeCalificaciones = 0;
    let promedio = 0;
    for (let i = 0; i < reservas.length; i++) {
        //recorrer listado de reservas con estado finalizado que coincida con el id del usuario Local
        if (reservas[i].localID == idUsuarioLocal && reservas[i].estado == 2 && reservas[i].calificacion > 0) {
            //guarda en el contador solo las reservas con calificacion > 0
            contadorCalificacionesValidas++;
            //ir sumando en cada iteracion las calificaciones
            sumaTotalDeCalificaciones = sumaTotalDeCalificaciones + reservas[i].calificacion;
        }
    }
    if (contadorCalificacionesValidas > 0) {
        //calculo el promedio solo si existen calificaciones validas
        promedio = sumaTotalDeCalificaciones / contadorCalificacionesValidas;
    }
    return promedio;
}

//funcion para mostrar en Estadisticas del local logueado el promedio de calificaciones
function mostrarPromedioLocalLogueado(idUsuarioLocal) {
    let promedio = promedioDeCalificacionesEnUnLocal(idUsuarioLocal);
    let mensaje = 'Calificación del local :';

    if (promedio == 0) {
        mensaje += ' Sin calificaciones.'
    } else {
        mensaje += ' ' + promedio + '%';
    }

    document.querySelector("#pPromedioDeCalificacion").innerHTML = mensaje;
}

//funcion para mostrar el listado de todos los locales y el promedio correspondiente
function mostrarListadoDePromedioDeCalificacionesDeLocales() {
    let listadoHTML = '';
    for (let i = 0; i < usuariosLocal.length; i++) {
        let promedio = promedioDeCalificacionesEnUnLocal(usuariosLocal[i].id);
        let mensajePromedio = 'Sin calificaciones';
        if (promedio != 0) {
            mensajePromedio = promedio;
        }
        listadoHTML += `<li>Local: ${usuariosLocal[i].nombre} || Calificación: ${mensajePromedio}</li>`;
    }
    document.querySelector("#ulListadoDeCalificaciones").innerHTML = listadoHTML;
}

//funcion que muestra los totales de reservas para el local logueado
function mostrarTotalDeReservasRealizadasEnElLocal() {
    let reservasPendientes = 0;
    let cantidadReservasFinalizadas = 0;

    for (let i = 0; i < reservas.length; i++) {
        //estado == 1 son las reservas Pendientes
        if (reservas[i].localID == usuarioLogueado.id && reservas[i].estado == 1) {
            reservasPendientes++;
        }
        //estado == 2 son las reservas finalizadas
        if (reservas[i].localID == usuarioLogueado.id && reservas[i].estado == 2) {
            cantidadReservasFinalizadas++;
        }
    }
    //mostrar en el div la informacion de las reservas
    document.querySelector("#divTotalesDeReservas").innerHTML =
        `<p>Total de reservas: ${reservasPendientes + cantidadReservasFinalizadas}</p>
        <p>Total de pendientes: ${reservasPendientes}</p>
        <p>Total de finalizadas: ${cantidadReservasFinalizadas}</p>`;

}

// -------------------------------------------------
//            Funciones de Estadisticas Persona
// -------------------------------------------------

//funcion para contar todas las reservas que no esten canceladas, en un determinado local
function calcularTotalDeReservasEnUnLocal(idUsuarioLocal) {
    let reservasHechas = 0;
    for (let i = 0; i < reservas.length; i++) {
        const reservaActual = reservas[i];
        if (reservaActual.localID == idUsuarioLocal && reservaActual.localID != null && reservaActual.estado != 3) {
            reservasHechas++
        }
    }
    return reservasHechas;
}

//funcion que devuelve el total de las reservas finalizadas y pendientes para el usuario persona logueado, en un determinado local
function calcularTotalDeReservasDeUnaPersonaEnUnLocal(pIdUsuarioLocal) {
    let reservasHechas = 0;
    for (let i = 0; i < reservas.length; i++) {
        const reservaActual = reservas[i];
        if (reservaActual.usuarioID == usuarioLogueado.id && usuarioLogueado.tipoUsuarioId == 2 && reservaActual.localID == pIdUsuarioLocal && reservaActual.usuarioID != null && reservaActual.estado != 3) {
            reservasHechas++
        }
    }
    return reservasHechas;
}

function mostrarListadoDeLocalesConReservasHechas() {
    let bodyHTML = '';
    let bodyHTMLLocalesConMasReservas = '';

    let localesConMasReservas = [];
    let primerIngreso = 0;
    
    for (let i = 0; i < usuariosLocal.length; i++) {
         let cantidadDeReservasHechasDelUsuario = calcularTotalDeReservasDeUnaPersonaEnUnLocal(usuariosLocal[i].id);
         
         let totalDeReservasDelLocal = calcularTotalDeReservasEnUnLocal(usuariosLocal[i].id);


         if (cantidadDeReservasHechasDelUsuario > 0) {
        

            let porcentaje = 0;

            if(totalDeReservasDelLocal > 0){
        
                porcentaje = Math.round(cantidadDeReservasHechasDelUsuario * 100 / totalDeReservasDelLocal);
            }
            //solo si existe un elemento en el arreglo, entra a la condicion
            if (localesConMasReservas.length > 0) {
                if (calcularTotalDeReservasDeUnaPersonaEnUnLocal(localesConMasReservas[0]) == cantidadDeReservasHechasDelUsuario) {
                    localesConMasReservas.push(usuariosLocal[i].id);
                } else if(calcularTotalDeReservasDeUnaPersonaEnUnLocal(localesConMasReservas[0]) < cantidadDeReservasHechasDelUsuario){
                    localesConMasReservas = [];
                    localesConMasReservas.push(usuariosLocal[i].id);
                }
            } else if (primerIngreso == 0){ 
                localesConMasReservas.push(usuariosLocal[i].id); 
                primerIngreso++;
              }

            
            bodyHTML += `<li> ${usuariosLocal[i].nombre}  || ${cantidadDeReservasHechasDelUsuario} reservas hechas || Reservas totales del local : ${totalDeReservasDelLocal} || ${porcentaje}  % de resevas hechas por el usuario</li>`;


        }


    }


    for (let i = 0; i < localesConMasReservas.length; i++) {
      let localIdActual = localesConMasReservas[i];

      
      let localActual = buscarUsuarioPorID(usuariosLocal, localIdActual);
      let cantidadDeReservasHechas = calcularTotalDeReservasDeUnaPersonaEnUnLocal(localIdActual);
      if(localActual != null){
        bodyHTMLLocalesConMasReservas += `<li>${localActual.nombre} || con ${cantidadDeReservasHechas} reservas hechas.</li>`;
      }
     
      
      
    }

    document.querySelector("#ulListadoDeReservasCompletadas").innerHTML = bodyHTML;

    if(bodyHTMLLocalesConMasReservas == ""){
      document.querySelector("#ulLocalConMasReservas").innerHTML = '<li>No hay reservas realizadas en locales.</li>'
    }else{
      document.querySelector("#ulLocalConMasReservas").innerHTML = bodyHTMLLocalesConMasReservas;
    }


}

