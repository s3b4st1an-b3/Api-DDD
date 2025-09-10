/**

Punto de entrada principal de la aplicación.

Este módulo se encarga de:

Configurar las variables de entorno usando dotenv

Establecer la conexión con la base de datos MongoDB

Inicializar el servidor Express en el puerto especificado

La aplicación utiliza un patrón de inicio que primero asegura la conexión

con la base de datos antes de poner en marcha el servidor web, garantizando

que todos los servicios dependientes de la base de datos funcionen correctamente.

@module main

@requires dotenv Módulo para cargar variables de entorno desde un archivo .env

@requires connectDB Función para establecer conexión con MongoDB

@requires app Instancia configurada de Express

@example

// Ejecutar la aplicación:

node app.js
*/

import dotenv from "dotenv";
import { connectDB } from "./src/config/database.js";
import app from "./src/interfaces/server.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
  });
});
