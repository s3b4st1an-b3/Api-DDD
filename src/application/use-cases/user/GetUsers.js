export const GetUsers = (userRepository) => async () => {
  return await userRepository.findAll();
};
