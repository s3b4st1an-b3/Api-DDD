/**

Controlador para gestionar las operaciones HTTP relacionadas con clientes.

Este módulo actúa como intermediario entre las rutas Express y los casos de uso

de la aplicación para la gestión de clientes. Maneja las solicitudes HTTP y

devuelve las respuestas apropiadas con los códigos de estado HTTP correspondientes.

Implementa los siguientes endpoints:

POST /: Crear un nuevo cliente

GET /: Obtener todos los clientes

GET /:id: Obtener un cliente por ID

PUT /:id: Actualizar un cliente existente

DELETE /:id: Eliminar un cliente

Cada función del controlador:

Inicializa el caso de uso correspondiente

Ejecuta la operación solicitada

Maneja los errores adecuadamente

Devuelve la respuesta HTTP con el estado apropiado

@module ClientController

@requires ClientRepositoryMongo Repositorio para operaciones de base de datos de clientes

@requires CreateClient Caso de uso para crear clientes

@requires GetClients Caso de uso para obtener todos los clientes

@requires GetClientById Caso de uso para obtener cliente por ID

@requires UpdateClient Caso de uso para actualizar clientes

@requires DeleteClient Caso de uso para eliminar clientes

@example

// Uso en las rutas:

import * as ClientController from "./ClientController.js";

router.post("/", ClientController.createClient);

router.get("/", ClientController.getClients);
*/

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
