/**

Establece la conexión con la base de datos MongoDB.

Esta función utiliza Mongoose como ODM (Object Data Modeling)

para conectar la aplicación a MongoDB. Se ejecuta de manera asíncrona

y maneja tanto la conexión exitosa como los posibles errores.

Las opciones de configuración aseguran que se usen los controladores

más modernos y estables:

useNewUrlParser: Usa el nuevo parser de URL de conexión.

useUnifiedTopology: Utiliza el nuevo motor de gestión de conexiones.

En caso de error en la conexión, el proceso se finaliza con código 1

para indicar una terminación anormal.

@async

@function connectDB

@returns {Promise<void>} Una promesa que se resuelve cuando la

conexión se establece correctamente. Si falla, el proceso se finaliza.

@example

import { connectDB } from "./config/database.js";

// Iniciar la conexión a MongoDB

connectDB().then(() => {

console.log("Base de datos conectada exitosamente");

});
*/

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", true);

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Conectado a MongoDB");
  } catch (err) {
    console.error(" Error conectando a MongoDB:", err.message);
    process.exit(1);
  }
};
