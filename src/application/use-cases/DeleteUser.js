export const DeleteUser = (userRepository) => async (id) => {
  return await userRepository.delete(id);
};
