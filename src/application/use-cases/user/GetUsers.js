/**

Caso de uso para la obtención de todos los usuarios del sistema.

Esta función implementa el patrón de caso de uso como una función de orden superior,

encapsulando la lógica de negocio específica para la recuperación del listado completo

de usuarios. Delega la operación de consulta masiva al repositorio inyectado.

Responsabilidades:

Solicitar al repositorio la recuperación de todos los usuarios existentes

Retornar el listado completo de usuarios

Mantener una interfaz consistente para posibles futuras implementaciones de

paginación, filtrado u ordenamiento

Características:

Función de orden superior que retorna una función asíncrona

Inyección de dependencias para el repositorio

Separación clara entre lógica de negocio y persistencia

Implementación minimalista que delega toda la lógica al repositorio

@function GetUsers

@param {Object} userRepository - Repositorio inyectado para operaciones de persistencia

@returns {Function} Función asíncrona que retorna una promesa con todos los usuarios

@example

// Uso del caso de uso:

const getUsers = GetUsers(userRepository);

const todosLosUsuarios = await getUsers();
*/

export const GetUsers = (userRepository) => async () => {
  return await userRepository.findAll();
};
