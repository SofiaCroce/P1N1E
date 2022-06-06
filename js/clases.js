// -------------------------------------------------
//                variables autonumericas
// -------------------------------------------------
let proximoIdTipoUsuario = 1;
let proximoIdTipoLocal = 1;
let proximoIdTipoEstadoDeReserva = 1;

let proximoUsuarioID = 1;
let proximaReservaID = 1;

// -------------------------------------------------
//                Clases del sistema
// -------------------------------------------------

// -------------------------------------------------
//                opciones.
// -------------------------------------------------
class TipoUsuario {
  constructor(pNombre) {
    this.id = proximoIdTipoUsuario; //autonumber
    this.nombre = pNombre;

    proximoIdTipoUsuario++;
  }
}

class TipoLocal {
  constructor(pNombre) {
    this.id = proximoIdTipoLocal; //autonumber
    this.nombre = pNombre;

    proximoIdTipoLocal++;
  }
}

class TipoEstadoDeReserva {
  constructor(pNombre) {
    this.id = proximoIdTipoEstadoDeReserva; //autonumber
    this.nombre = pNombre;

    proximoIdTipoEstadoDeReserva++;
  }
}
// -------------------------------------------------
// clase  UsuarioLocal
// -------------------------------------------------
class UsuarioLocal {
  constructor(pNombre, pPassword, pDireccion, pCupoMaximo, pFoto, pTipoLocal) {
    this.id = proximoUsuarioID; //autonumber
    this.nombreUsuario = pNombre; // Case insensitive
    this.password = pPassword; // Case sensitive
    this.direccion = pDireccion;
    this.cupoMaximo = pCupoMaximo;
    this.foto = pFoto; // Nombre de la imagen y extension ej: img1.jpg
    this.tipoLocal = pTipoLocal; // clase existene
    this.habilitado = true; // estado booleano
    this.tipoUsuarioId = 1; // clase existene

    proximoUsuarioID++;
  }

  dehabilitarLocal() {
    this.habilitado = false;
    console.log(this);
    console.log("Deshabilitado");
  }
}

// -------------------------------------------------
// clase  UsuarioPersona
// -------------------------------------------------
class UsuarioPersona {
  constructor(pNombre, pPassword) {
    this.id = proximoUsuarioID; //autonumber
    this.nombreUsuario = pNombre; //Debe ser Unico en toda la app
    this.password = pPassword; // La contraseña deberá tener un mínimo de 6 caracteres, contando con al menos una mayúscula, una minúscula y un número
    this.tipoUsuarioId = 2;

    proximoUsuarioID++;
  }
}

// -------------------------------------------------
// clase  Reserva
// -------------------------------------------------
class Reserva {
  constructor(pUsuarioID, pLocalID, pCuposSolicitados) {
    this.id = proximaReservaID; //autonumber
    this.usuarioID = pUsuarioID; // ID del usuario que reservo
    this.localID = pLocalID; // ID del local donde se reservo
    this.cupos = pCuposSolicitados; // no deben superar la disponibilidad del local
    this.estado = 1; // pendiente = 1 por defecto, otros estados: finalizado = 2, cancelado = 3.
    this.calificacion = 0; // si es 0, el usuario aun no la califico

    proximaReservaID++;
  }
}
