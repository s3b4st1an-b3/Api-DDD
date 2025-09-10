/**

Caso de uso para la obtención de un pedido específico por su identificador.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la recuperación de un pedido individual. Coordina la operación

de consulta con el repositorio de persistencia, manteniendo una separación clara

de responsabilidades.

Responsabilidades:

Recibir el identificador único del pedido a consultar

Delegar la operación de búsqueda al repositorio

Retornar el pedido encontrado (o null si no existe) al controlador

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, facilitando el testing unitario y posibles cambios

en el mecanismo de persistencia sin afectar la lógica de negocio.

@class GetPedidoById

@param {Object} pedidoRepository - Repositorio inyectado para operaciones de persistencia

@example

// Uso del caso de uso:

const getPedidoById = new GetPedidoById(pedidoRepository);

const pedido = await getPedidoById.execute(pedidoId);
*/

export default class GetPedidoById {
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute(id) {
    return await this.pedidoRepository.findById(id);
  }
}
