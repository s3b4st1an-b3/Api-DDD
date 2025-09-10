import express from "express";
import cors from "cors";
import pedidoRoutes from "../infrastructure/routes/pedido/pedidoRoutes.js";
import userRoutes from "../infrastructure/routes/user/userRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pedidos", pedidoRoutes);
app.use("/api/users", userRoutes)

export default app;
