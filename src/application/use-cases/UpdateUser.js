export const UpdateUser = (userRepository) => async (id, data) => {
  return await userRepository.update(id, data);
};
