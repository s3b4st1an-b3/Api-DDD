/**

Caso de uso para la creación de nuevos usuarios.

Esta función implementa el patrón de caso de uso como una función de orden superior,

encapsulando la lógica de negocio específica para la creación de usuarios. Incluye

validación de negocio para el rol del usuario antes de proceder con la creación.

Responsabilidades:

Validar que el rol proporcionado sea uno de los permitidos ("admin" o "asesor")

Delegar la operación de persistencia al repositorio inyectado

Retornar el usuario creado o lanzar un error de validación

Características:

Función de orden superior que retorna una función asíncrona

Inyección de dependencias para el repositorio

Validación de reglas de negocio antes de la persistencia

Separación clara entre lógica de negocio y persistencia

@function CreateUser

@param {Object} userRepository - Repositorio inyectado para operaciones de persistencia

@returns {Function} Función asíncrona que recibe los datos del usuario y retorna una promesa

@throws {Error} Si el rol proporcionado no es válido

@example

// Uso del caso de uso:

const createUser = CreateUser(userRepository);

const nuevoUsuario = await createUser(userData);
*/

export const CreateUser = (userRepository) => async (data) => {
  if (!["admin", "asesor"].includes(data.rol)) {
    throw new Error("Rol inválido. Solo se permite admin o asesor");
  }
  return await userRepository.create(data);
};
