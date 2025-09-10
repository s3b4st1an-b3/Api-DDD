/**

Router para gestionar las rutas relacionadas con usuarios.

Este módulo define los endpoints RESTful para las operaciones CRUD de usuarios,

utilizando funciones de controlador importadas directamente. Las rutas incluyen:

POST /: Crear un nuevo usuario

GET /: Obtener listado de todos los usuarios

GET /:id: Obtener un usuario específico por su ID

PUT /:id: Actualizar un usuario existente por su ID

DELETE /:id: Eliminar un usuario existente por su ID

A diferencia del router de pedidos, este módulo importa y utiliza las funciones

del controlador directamente en lugar de invocar métodos de una clase. Esto

muestra un enfoque alternativo para estructurar los controladores.

@module userRoutes

@requires express Framework web para Node.js

@requires createUser Función para crear un nuevo usuario

@requires getUsers Función para obtener todos los usuarios

@requires getUserById Función para obtener un usuario por ID

@requires updateUser Función para actualizar un usuario existente

@requires deleteUser Función para eliminar un usuario existente

@example

// Uso en la aplicación principal:

import userRoutes from "./routes/user/userRoutes.js";

app.use("/api/users", userRoutes);
*/

import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../../controllers/user/userController.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
