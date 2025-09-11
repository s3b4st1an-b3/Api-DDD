/**

Caso de uso para la eliminación de clientes existentes.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la eliminación de clientes. Coordina la operación de borrado con

el repositorio de persistencia, manteniendo una separación clara de responsabilidades.

Responsabilidades:

Recibir el identificador del cliente a eliminar

Delegar la operación de eliminación al repositorio

Retornar el resultado de la operación al controlador

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, lo que facilita el testing y posibles cambios

en el mecanismo de persistencia sin afectar la lógica de negocio.

@class DeleteClient

@param {Object} clientRepository - Repositorio inyectado para operaciones de persistencia de clientes

@example

// Uso del caso de uso:

const deleteClient = new DeleteClient(clientRepository);

const resultado = await deleteClient.execute(clientId);
*/

export default class DeleteClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(id) {
    return await this.clientRepository.delete(id);
  }
}
