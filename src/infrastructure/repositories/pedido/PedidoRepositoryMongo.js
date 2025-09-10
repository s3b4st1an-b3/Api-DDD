/**

Definición del modelo de datos para Pedidos y su repositorio MongoDB.

Este módulo define:

Los esquemas de Mongoose para Dirección, Item y Pedido

El modelo de Mongoose para la colección de pedidos

La clase del repositorio que encapsula las operaciones CRUD con la base de datos

Estructura de datos:

Dirección: Información de ubicación (calle, ciudad)

Item: Productos individuales dentro de un pedido (producto, cantidad, precio)

Pedido: Contiene información del cliente, items, domicilio y total

El repositorio proporciona una capa de abstracción sobre las operaciones de MongoDB,

permitiendo un fácil intercambio del mecanismo de persistencia si fuera necesario.

@module PedidoRepository

@requires mongoose ODM (Object Data Modeling) para MongoDB

@example

// Uso del repositorio:

import pedidoRepository from "./pedidoRepositoryMongo.js";

// Crear un nuevo pedido

const nuevoPedido = await pedidoRepository.create(pedidoData);
*/

import mongoose from "mongoose";

const direccionSchema = new mongoose.Schema({
  calle: String,
  ciudad: String,
});

const itemSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
});

const pedidoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  telefono: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  items: [itemSchema],
  domicilio: { type: Boolean, default: false },
  direccion: direccionSchema,
  total: { type: Number, required: true },
});

const PedidoModel = mongoose.model("Pedido", pedidoSchema);

class PedidoRepositoryMongo {
  async create(data) {
    return await PedidoModel.create(data);
  }
  async findAll() {
    return await PedidoModel.find();
  }
  async findById(id) {
    return await PedidoModel.findById(id);
  }
  async update(id, data) {
    return await PedidoModel.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await PedidoModel.findByIdAndDelete(id);
  }
}

export default new PedidoRepositoryMongo();
