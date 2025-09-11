
/**

Router para gestionar las rutas relacionadas con clientes.

Este módulo define los endpoints RESTful para las operaciones CRUD de clientes,

delegando la lógica de control a las funciones del controlador de clientes. Las rutas incluyen:

POST /: Crear un nuevo cliente

GET /: Obtener listado de todos los clientes

GET /:id: Obtener un cliente específico por su ID

PUT /:id: Actualizar un cliente existente por su ID

DELETE /:id: Eliminar un cliente existente por su ID

Cada ruta está mapeada a su correspondiente función en el controlador,

manteniendo una separación clara entre la lógica de enrutamiento y la lógica de negocio.

@module clientRoutes

@requires express Framework web para Node.js

@requires createClient Función para crear un nuevo cliente

@requires getClients Función para obtener todos los clientes

@requires getClientById Función para obtener un cliente por ID

@requires updateClient Función para actualizar un cliente existente

@requires deleteClient Función para eliminar un cliente existente

@example

// Uso en la aplicación principal:

import clientRoutes from "./routes/client/clientRoutes.js";

app.use("/api/clients", clientRoutes);
*/


import express from "express";
import { createClient, getClients, getClientById, updateClient, deleteClient } from "../../controllers/client/clientController.js";

const router = express.Router();

router.post("/", createClient);
router.get("/", getClients);
router.get("/:id", getClientById);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
