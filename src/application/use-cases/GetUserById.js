export const GetUserById = (userRepository) => async (id) => {
  return await userRepository.findById(id);
};
