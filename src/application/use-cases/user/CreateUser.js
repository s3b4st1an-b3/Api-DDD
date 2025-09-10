export const CreateUser = (userRepository) => async (data) => {
  if (!["admin", "asesor"].includes(data.rol)) {
    throw new Error("Rol inválido. Solo se permite admin o asesor");
  }
  return await userRepository.create(data);
};
