/**

Caso de uso para la actualización de clientes existentes.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la modificación de clientes. Coordina la operación de actualización

con el repositorio de persistencia, manteniendo una separación clara de responsabilidades.

Responsabilidades:

Recibir el identificador del cliente a actualizar y los nuevos datos

Delegar la operación de actualización al repositorio

Retornar el cliente actualizado al controlador

Garantizar la integridad de los datos durante el proceso de actualización

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, facilitando el testing unitario y posibles cambios

en el mecanismo de persistencia sin afectar la lógica de negocio.

@class UpdateClient

@param {Object} clientRepository - Repositorio inyectado para operaciones de persistencia de clientes

@example

// Uso del caso de uso:

const updateClient = new UpdateClient(clientRepository);

const clienteActualizado = await updateClient.execute(clientId, nuevosDatos);
*/

export default class UpdateClient {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(id, data) {
    return await this.clientRepository.update(id, data);
  }
}
