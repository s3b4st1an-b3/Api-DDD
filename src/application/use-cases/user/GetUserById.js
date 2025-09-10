/**

Caso de uso para la obtención de un usuario específico por su identificador.

Esta función implementa el patrón de caso de uso como una función de orden superior,

encapsulando la lógica de negocio específica para la recuperación de un usuario individual.

Delega la operación de búsqueda al repositorio inyectado.

Responsabilidades:

Recibir el identificador único del usuario a consultar

Delegar la operación de búsqueda al repositorio

Retornar el usuario encontrado (o null si no existe)

Características:

Función de orden superior que retorna una función asíncrona

Inyección de dependencias para el repositorio

Separación clara entre lógica de negocio y persistencia

Implementación minimalista que delega toda la lógica al repositorio

@function GetUserById

@param {Object} userRepository - Repositorio inyectado para operaciones de persistencia

@returns {Function} Función asíncrona que recibe el ID del usuario y retorna una promesa

@example

// Uso del caso de uso:

const getUserById = GetUserById(userRepository);

const usuario = await getUserById(userId);
*/

export const GetUserById = (userRepository) => async (id) => {
  return await userRepository.findById(id);
};
