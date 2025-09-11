/**

Entidad de dominio que representa un Cliente en el sistema.

Esta clase define la estructura y atributos fundamentales de un cliente,

encapsulando los datos esenciales y garantizando la integridad de la información.

Propiedades:

documento: Número de identificación/documento del cliente

nombreCompleto: Nombre completo del cliente

fechaNacimiento: Fecha de nacimiento del cliente

direccion: Dirección física del cliente

whatsapp: Número de WhatsApp del cliente para comunicación

La entidad sigue el principio de Rich Domain Model, conteniendo la definición

fundamental de lo que constituye un cliente dentro del sistema.

@class Client

@param {Object} config - Objeto de configuración para crear un cliente

@param {string} config.documento - Número de documento/identificación

@param {string} config.nombreCompleto - Nombre completo del cliente

@param {Date} config.fechaNacimiento - Fecha de nacimiento del cliente

@param {string} config.direccion - Dirección física del cliente

@param {string} config.whatsapp - Número de WhatsApp del cliente

@example

// Crear una nueva instancia de Cliente

const cliente = new Client({

documento: "12345678",

nombreCompleto: "María González",

fechaNacimiento: new Date("1985-05-15"),

direccion: "Calle Principal 123",

whatsapp: "+573001234567"

});
*/

export default class Client {
  constructor({ documento, nombreCompleto, fechaNacimiento, direccion, whatsapp }) {
    this.documento = documento;
    this.nombreCompleto = nombreCompleto;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.whatsapp = whatsapp;
  }
}
