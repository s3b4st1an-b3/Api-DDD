import express from "express";
import cors from "cors";
import pedidoRoutes from "../infrastructure/routes/pedidoRoutes.js";
import userRoutes from "../infrastructure/routes/userRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pedidos", pedidoRoutes);
app.use("/api/users", userRoutes)

export default app;
