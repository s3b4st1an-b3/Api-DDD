/**

Controlador para gestionar las operaciones HTTP relacionadas con pedidos.

Este módulo actúa como intermediario entre las rutas Express y los casos de uso

de la aplicación, manejando las solicitudes HTTP y devolviendo las respuestas apropiadas.

Implementa los siguientes endpoints:

POST /: Crear un nuevo pedido

GET /: Obtener todos los pedidos

GET /:id: Obtener un pedido por ID

PUT /:id: Actualizar un pedido existente

DELETE /:id: Eliminar un pedido

Cada método del controlador:

Recibe la solicitud HTTP

Ejecuta el caso de uso correspondiente

Maneja los errores adecuadamente

Devuelve la respuesta HTTP con el estado apropiado

@module PedidoController

@requires CreatePedido Caso de uso para crear pedidos

@requires GetPedidos Caso de uso para obtener todos los pedidos

@requires GetPedidoById Caso de uso para obtener pedido por ID

@requires UpdatePedido Caso de uso para actualizar pedidos

@requires DeletePedido Caso de uso para eliminar pedidos

@requires PedidoRepositoryMongo Repositorio para operaciones de base de datos

@example

// Uso en las rutas:

import PedidoController from "./PedidoController.js";

router.post("/", (req, res) => PedidoController.create(req, res));
*/


import CreatePedido from "../../../application/use-cases/pedido/CreatePedido.js";
import GetPedidos from "../../../application/use-cases/pedido/GetPedidos.js";
import GetPedidoById from "../../../application/use-cases/pedido/GetPedidoById.js";
import UpdatePedido from "../../../application/use-cases/pedido/UpdatePedido.js";
import DeletePedido from "../../../application/use-cases/pedido/DeletePedido.js";
import PedidoRepositoryMongo from "../../repositories/pedido/PedidoRepositoryMongo.js";

const createPedido = new CreatePedido(PedidoRepositoryMongo);
const getPedidos = new GetPedidos(PedidoRepositoryMongo);
const getPedidoById = new GetPedidoById(PedidoRepositoryMongo);
const updatePedido = new UpdatePedido(PedidoRepositoryMongo);
const deletePedido = new DeletePedido(PedidoRepositoryMongo);

class PedidoController {
  async create(req, res) {
    try {
      const pedido = await createPedido.execute(req.body);
      res.status(201).json(pedido);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async list(req, res) {
    try {
      const pedidos = await getPedidos.execute();
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const pedido = await getPedidoById.execute(req.params.id);
      if (!pedido) return res.status(404).json({ error: "Pedido no encontrado" });
      res.json(pedido);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const pedido = await updatePedido.execute(req.params.id, req.body);
      if (!pedido) return res.status(404).json({ error: "Pedido no encontrado" });
      res.json(pedido);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const pedido = await deletePedido.execute(req.params.id);
      if (!pedido) return res.status(404).json({ error: "Pedido no encontrado" });
      res.json({ message: "Pedido eliminado correctamente" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new PedidoController();
