/**

Caso de uso para la creación de nuevos clientes.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la creación de clientes. Actúa como intermediario entre los controladores

y el repositorio, manteniendo una separación clara de responsabilidades.

Responsabilidades:

Recibir los datos del cliente desde el controlador

Delegar la persistencia de datos al repositorio

Retornar el resultado de la operación al controlador

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, permitiendo una fácil sustitución para testing

o cambio de implementación de persistencia.

@class CreateClient

@param {Object} clientRepository - Repositorio inyectado para operaciones de persistencia de clientes

@example

// Uso del caso de uso:

const createClient = new CreateClient(clientRepository);

const nuevoCliente = await createClient.execute(clientData);
*/

export default class CreateClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(data) {
    return await this.clientRepository.create(data);
  }
}
