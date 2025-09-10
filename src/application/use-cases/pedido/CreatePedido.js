/**

Caso de uso para la creación de nuevos pedidos.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la creación de pedidos. Actúa como intermediario entre los controladores

y el repositorio, manteniendo una separación clara de responsabilidades.

Responsabilidades:

Recibir los datos del pedido desde el controlador

Delegar la persistencia de datos al repositorio

Retornar el resultado de la operación al controlador

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, permitiendo una fácil sustitución para testing

o cambio de implementación de persistencia.

@class CreatePedido

@param {Object} pedidoRepository - Repositorio inyectado para operaciones de persistencia

@example

// Uso del caso de uso:

const createPedido = new CreatePedido(pedidoRepository);

const nuevoPedido = await createPedido.execute(pedidoData);
*/

export default class CreatePedido {
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute(pedidoData) {
    return await this.pedidoRepository.create(pedidoData);
  }
}
