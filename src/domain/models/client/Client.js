// src/domain/models/client/Client.js
export default class Client {
  constructor({ documento, nombreCompleto, fechaNacimiento, direccion, whatsapp }) {
    this.documento = documento;
    this.nombreCompleto = nombreCompleto;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.whatsapp = whatsapp;
  }
}
