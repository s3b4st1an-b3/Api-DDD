import express from "express";
import cors from "cors";
import pedidoRoutes from "../infrastructure/routes/pedidoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pedidos", pedidoRoutes);

export default app;
