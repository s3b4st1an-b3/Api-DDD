import CreatePedido from "../../application/use-cases/CreatePedido.js";
import GetPedidos from "../../application/use-cases/GetPedidos.js";
import GetPedidoById from "../../application/use-cases/GetPedidoById.js";
import UpdatePedido from "../../application/use-cases/UpdatePedido.js";
import DeletePedido from "../../application/use-cases/DeletePedido.js";
import PedidoRepositoryMongo from "../repositories/PedidoRepositoryMongo.js";

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
