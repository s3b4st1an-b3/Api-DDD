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
