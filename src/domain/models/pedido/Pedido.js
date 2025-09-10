/**

Entidad de dominio que representa un Pedido en el sistema.

Esta clase define la estructura y reglas de negocio fundamentales para un pedido,

encapsulando los datos esenciales y garantizando la integridad de la información.

Propiedades:

cliente: Nombre del cliente (requerido)

telefono: Número de teléfono del cliente (requerido)

fecha: Fecha de creación del pedido (valor por defecto: fecha actual)

items: Array de productos/items incluidos en el pedido

domicilio: Indicador si el pedido es para entrega a domicilio (valor por defecto: false)

direccion: Objeto con información de dirección para envío (opcional)

total: Monto total del pedido (requerido)

La entidad sigue el principio de Rich Domain Model, conteniendo la lógica de negocio

fundamental relacionada con los pedidos dentro de la misma clase.

@class Pedido

@param {Object} config - Objeto de configuración para crear un pedido

@param {string} config.cliente - Nombre del cliente

@param {number} config.telefono - Número de teléfono del cliente

@param {Date} [config.fecha=new Date()] - Fecha del pedido

@param {Array} config.items - Items incluidos en el pedido

@param {boolean} [config.domicilio=false] - Indica si es entrega a domicilio

@param {Object} [config.direccion] - Información de dirección para envío

@param {number} config.total - Monto total del pedido

@example

// Crear una nueva instancia de Pedido

const pedido = new Pedido({

cliente: "Juan Pérez",

telefono: 1234567890,

items: [{ producto: "Pizza", cantidad: 1, precio: 100 }],

total: 100

});
*/

class Pedido {
  constructor({ cliente, telefono, fecha, items, domicilio, direccion, total }) {
    this.cliente = cliente;
    this.telefono = telefono;
    this.fecha = fecha || new Date();
    this.items = items;
    this.domicilio = domicilio || false;
    this.direccion = direccion;
    this.total = total;
  }
}

export default Pedido;
