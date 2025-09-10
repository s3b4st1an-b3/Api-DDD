/**

Caso de uso para la actualización de pedidos existentes.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la modificación de pedidos. Coordina la operación de actualización

con el repositorio de persistencia, manteniendo una separación clara de responsabilidades.

Responsabilidades:

Recibir el identificador del pedido a actualizar y los nuevos datos

Delegar la operación de actualización al repositorio

Retornar el pedido actualizado al controlador

Garantizar la integridad de los datos durante el proceso de actualización

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, facilitando el testing unitario y posibles cambios

en el mecanismo de persistencia sin afectar la lógica de negocio.

@class UpdatePedido

@param {Object} pedidoRepository - Repositorio inyectado para operaciones de persistencia

@example

// Uso del caso de uso:

const updatePedido = new UpdatePedido(pedidoRepository);

const pedidoActualizado = await updatePedido.execute(pedidoId, nuevosDatos);
*/

export default class UpdatePedido {
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute(id, data) {
    return await this.pedidoRepository.update(id, data);
  }
}
