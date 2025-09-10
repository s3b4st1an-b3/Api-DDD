import { Router } from "express";
import PedidoController from "../../controllers/pedido/pedidoController.js";

const router = Router();

router.post("/", (req, res) => PedidoController.create(req, res));
router.get("/", (req, res) => PedidoController.list(req, res));
router.get("/:id", (req, res) => PedidoController.getById(req, res));
router.put("/:id", (req, res) => PedidoController.update(req, res));
router.delete("/:id", (req, res) => PedidoController.delete(req, res));

export default router;
