/**

Caso de uso para la actualización de usuarios existentes.

Esta función implementa el patrón de caso de uso como una función de orden superior,

encapsulando la lógica de negocio específica para la modificación de usuarios. Delega

completamente la operación de actualización al repositorio inyectado, el cual se

encarga internamente de procesamientos adicionales como el hashing de contraseñas.

Responsabilidades:

Recibir el identificador del usuario a actualizar y los nuevos datos

Delegar la operación de actualización al repositorio

Retornar el usuario actualizado

Características:

Función de orden superior que retorna una función asíncrona

Inyección de dependencias para el repositorio

Separación clara entre lógica de negocio y persistencia

Implementación minimalista que aprovecha la lógica del repositorio

El repositorio se encarga internamente de hashear contraseñas si se proporcionan

@function UpdateUser

@param {Object} userRepository - Repositorio inyectado para operaciones de persistencia

@returns {Function} Función asíncrona que recibe ID y datos, retornando una promesa

@example

// Uso del caso de uso:

const updateUser = UpdateUser(userRepository);

const usuarioActualizado = await updateUser(userId, nuevosDatos);
*/

export const UpdateUser = (userRepository) => async (id, data) => {
  return await userRepository.update(id, data);
};
