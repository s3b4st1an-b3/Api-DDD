/**

Repositorio para gestionar las operaciones de base de datos de usuarios.

Este módulo implementa el patrón Repository para abstraer las operaciones CRUD

de usuarios en MongoDB, proporcionando una interfaz consistente para la capa de aplicación.

Incluye funcionalidad específica para el manejo seguro de contraseñas mediante bcrypt.

Características principales:

Creación de nuevos usuarios

Obtención de listados y usuarios individuales

Actualización de datos de usuario con hash seguro de contraseñas

Eliminación de usuarios

El repositorio se encarga automáticamente de hashear las contraseñas antes de almacenarlas

en la base de datos cuando se crea o actualiza un usuario, garantizando la seguridad de los datos.

@module UserRepositoryMongo

@requires UserModel Modelo de Mongoose para la entidad User

@requires bcrypt Librería para hashing de contraseñas

@example

// Uso del repositorio:

import { UserRepositoryMongo } from "./UserRepositoryMongo.js";

const userRepository = new UserRepositoryMongo();

// Crear un nuevo usuario

const newUser = await userRepository.create(userData);
*/

import { UserModel } from "../../../domain/models/user/User.js";
import bcrypt from "bcrypt";

export class UserRepositoryMongo {
  async create(data) {
    const user = new UserModel(data);
    return await user.save();
  }

  async findAll() {
    return await UserModel.find();
  }

  async findById(id) {
    return await UserModel.findById(id);
  }

  async update(id, data) {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await UserModel.findByIdAndDelete(id);
  }
}
