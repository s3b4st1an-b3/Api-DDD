/**

Caso de uso para la eliminación de usuarios existentes.

Esta función implementa el patrón de caso de uso como una función de orden superior,

encapsulando la lógica de negocio específica para la eliminación de usuarios. Delega

completamente la operación de eliminación al repositorio inyectado.

Responsabilidades:

Recibir el identificador único del usuario a eliminar

Delegar la operación de eliminación al repositorio

Retornar el resultado de la operación de eliminación

Características:

Función de orden superior que retorna una función asíncrona

Inyección de dependencias para el repositorio

Separación clara entre lógica de negocio y persistencia

Implementación minimalista que delega toda la lógica al repositorio

@function DeleteUser

@param {Object} userRepository - Repositorio inyectado para operaciones de persistencia

@returns {Function} Función asíncrona que recibe el ID del usuario y retorna una promesa

@example

// Uso del caso de uso:

const deleteUser = DeleteUser(userRepository);

const resultado = await deleteUser(userId);
*/

export const DeleteUser = (userRepository) => async (id) => {
  return await userRepository.delete(id);
};
