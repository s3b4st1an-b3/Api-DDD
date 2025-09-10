/**

Router para gestionar las rutas relacionadas con pedidos.

Este módulo define los endpoints RESTful para las operaciones CRUD de pedidos,

delegando la lógica de control al PedidoController. Las rutas incluyen:

POST /: Crear un nuevo pedido

GET /: Obtener listado de todos los pedidos

GET /:id: Obtener un pedido específico por su ID

PUT /:id: Actualizar un pedido existente por su ID

DELETE /:id: Eliminar un pedido existente por su ID

Cada ruta está mapeada a su correspondiente método en el controlador,

manteniendo una separación clara entre la lógica de enrutamiento y la lógica de negocio.

@module pedidoRoutes

@requires express Framework web para Node.js

@requires PedidoController Controlador que maneja la lógica de negocio de pedidos

@example

// Uso en la aplicación principal:

import pedidoRoutes from "./routes/pedido/pedidoRoutes.js";

app.use("/api/pedidos", pedidoRoutes);
*/

import { Router } from "express";
import PedidoController from "../../controllers/pedido/pedidoController.js";

const router = Router();

router.post("/", (req, res) => PedidoController.create(req, res));
router.get("/", (req, res) => PedidoController.list(req, res));
router.get("/:id", (req, res) => PedidoController.getById(req, res));
router.put("/:id", (req, res) => PedidoController.update(req, res));
router.delete("/:id", (req, res) => PedidoController.delete(req, res));

export default router;
