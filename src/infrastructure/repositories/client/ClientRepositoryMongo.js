/**

Repositorio para gestionar las operaciones de base de datos de clientes.

Este módulo implementa el patrón Repository para abstraer las operaciones CRUD

de clientes en MongoDB, proporcionando una interfaz consistente para la capa de aplicación.

Incluye:

Definición del esquema de Mongoose para la entidad Client

Registro del modelo Client en Mongoose

Implementación del repositorio con operaciones CRUD completas

Estructura del cliente en base de datos:

documento: Número de identificación (único y requerido)

nombreCompleto: Nombre completo del cliente (requerido)

fechaNacimiento: Fecha de nacimiento (requerido)

direccion: Dirección física (opcional)

whatsapp: Número de WhatsApp (opcional)

El repositorio proporciona métodos para:

Crear nuevos clientes

Obtener todos los clientes

Buscar cliente por ID

Actualizar datos de cliente existente

Eliminar clientes

@module ClientRepositoryMongo

@requires mongoose ODM para MongoDB

@example

// Uso del repositorio:

import { ClientRepositoryMongo } from "./ClientRepositoryMongo.js";

const clientRepository = new ClientRepositoryMongo();

// Crear un nuevo cliente

const newClient = await clientRepository.create(clientData);
*/

import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  documento: { type: String, required: true, unique: true },
  nombreCompleto: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  direccion: { type: String },
  whatsapp: { type: String }
});

// Aquí se registra el modelo en mongoose
const ClientModel = mongoose.model("Client", clientSchema);

export class ClientRepositoryMongo {
  async create(data) {
    return await ClientModel.create(data);
  }

  async findAll() {
    return await ClientModel.find();
  }

  async findById(id) {
    return await ClientModel.findById(id);
  }

  async update(id, data) {
    return await ClientModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await ClientModel.findByIdAndDelete(id);
  }
}
