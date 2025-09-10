/**

Definición del modelo de datos para Usuarios en MongoDB.

Este módulo define el esquema y modelo de Mongoose para la entidad User,

incluyendo validaciones, middlewares y métodos personalizados.

Estructura del usuario:

email: Dirección de correo electrónico (única y requerida)

password: Contraseña hasheada (requerida)

rol: Rol del usuario (admin o asesor, validado por enum)

estatus: Estado activo/inactivo del usuario (valor por defecto: true)

Middlewares:

pre("save"): Hashea automáticamente la contraseña antes de guardar el documento

solo si la contraseña ha sido modificada, optimizando el proceso.

Validaciones:

Campos requeridos: email, password, rol

Email único: garantiza que no existan usuarios duplicados

Rol validado: solo acepta los valores "admin" o "asesor"

@module UserModel

@requires mongoose ODM para MongoDB

@requires bcrypt Librería para hashing de contraseñas

@example

// Crear un nuevo usuario

const newUser = new UserModel({

email: "usuario@ejemplo.com",

password: "contraseña123",

rol: "asesor"

});

await newUser.save();
*/

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ["admin", "asesor"], required: true },
  estatus: { type: Boolean, default: true },
});

// Encriptar contraseña antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const UserModel = mongoose.model("User", userSchema);
