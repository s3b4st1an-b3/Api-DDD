/**

Configuración principal de la aplicación Express.

Este módulo crea y configura una instancia de Express, aplicando middlewares

esenciales y definiendo las rutas base para la API. Utiliza CORS para permitir

solicitudes cruzadas y el middleware nativo de Express para el parsing de JSON.

Las rutas están organizadas modularmente:

/api/pedidos: Para todas las operaciones relacionadas con pedidos

/api/users: Para todas las operaciones relacionadas con usuarios

@module app

@requires express Framework web para Node.js

@requires cors Middleware para habilitar CORS

@requires pedidoRoutes Rutas relacionadas con la gestión de pedidos

@requires userRoutes Rutas relacionadas con la gestión de usuarios

@example

import app from "./app.js";

// Iniciar el servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

console.log(Servidor ejecutándose en el puerto ${PORT});

});
*/

import express from "express";
import cors from "cors";
import pedidoRoutes from "../infrastructure/routes/pedido/pedidoRoutes.js";
import userRoutes from "../infrastructure/routes/user/userRoutes.js";
import clientRoutes from "../infrastructure/routes/client/clientRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pedidos", pedidoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/clients", clientRoutes);

export default app;
