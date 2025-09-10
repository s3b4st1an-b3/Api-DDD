/**

Caso de uso para la eliminación de pedidos existentes.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la eliminación de pedidos. Coordina la operación de borrado con

el repositorio de persistencia, manteniendo una separación clara de responsabilidades.

Responsabilidades:

Recibir el identificador del pedido a eliminar

Delegar la operación de eliminación al repositorio

Retornar el resultado de la operación al controlador

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, lo que facilita el testing y posibles cambios

en el mecanismo de persistencia.

@class DeletePedido

@param {Object} pedidoRepository - Repositorio inyectado para operaciones de persistencia

@example

// Uso del caso de uso:

const deletePedido = new DeletePedido(pedidoRepository);

const resultado = await deletePedido.execute(pedidoId);
*/

export default class DeletePedido {
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute(id) {
    return await this.pedidoRepository.delete(id);
  }
}
