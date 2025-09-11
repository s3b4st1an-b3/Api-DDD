import { ClientRepositoryMongo } from "../../repositories/client/ClientRepositoryMongo.js";
import CreateClient from "../../../application/use-cases/client/CreateClient.js";
import GetClients from "../../../application/use-cases/client/GetClients.js";
import GetClientById from "../../../application/use-cases/client/GetClientById.js";
import UpdateClient from "../../../application/use-cases/client/UpdateClient.js";
import DeleteClient from "../../../application/use-cases/client/DeleteClient.js";

const repo = new ClientRepositoryMongo();

export const createClient = async (req, res) => {
  try {
    const useCase = new CreateClient(repo);
    const client = await useCase.execute(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getClients = async (req, res) => {
  const useCase = new GetClients(repo);
  res.json(await useCase.execute());
};

export const getClientById = async (req, res) => {
  const useCase = new GetClientById(repo);
  const client = await useCase.execute(req.params.id);
  if (!client) return res.status(404).json({ error: "Cliente no encontrado" });
  res.json(client);
};

export const updateClient = async (req, res) => {
  const useCase = new UpdateClient(repo);
  const client = await useCase.execute(req.params.id, req.body);
  if (!client) return res.status(404).json({ error: "Cliente no encontrado" });
  res.json(client);
};

export const deleteClient = async (req, res) => {
  const useCase = new DeleteClient(repo);
  await useCase.execute(req.params.id);
  res.json({ message: "Cliente eliminado" });
};
