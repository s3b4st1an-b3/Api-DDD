import { UserRepositoryMongo } from "../repositories/UserRepositoryMongo.js";
import { CreateUser } from "../../application/use-cases/CreateUser.js";
import { GetUsers } from "../../application/use-cases/GetUsers.js";
import { GetUserById } from "../../application/use-cases/GetUserById.js";
import { UpdateUser } from "../../application/use-cases/UpdateUser.js";
import { DeleteUser } from "../../application/use-cases/DeleteUser.js";

const userRepository = new UserRepositoryMongo();

export const createUser = async (req, res) => {
  try {
    const user = await CreateUser(userRepository)(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await GetUsers(userRepository)();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await GetUserById(userRepository)(req.params.id);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await UpdateUser(userRepository)(req.params.id, req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await DeleteUser(userRepository)(req.params.id);
  res.json({ message: "Usuario eliminado" });
};
