
/**

Caso de uso para la obtención de todos los pedidos del sistema.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la recuperación del listado completo de pedidos. Coordina la operación

de consulta masiva con el repositorio de persistencia, manteniendo una separación clara

de responsabilidades.

Responsabilidades:

Solicitar al repositorio la recuperación de todos los pedidos existentes

Retornar el listado completo de pedidos al controlador

Manejar potencialmente paginación, filtros u ordenamiento en futuras implementaciones

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, lo que permite una fácil sustitución para testing

o cambios en el mecanismo de persistencia sin afectar la lógica de negocio.

@class GetPedidos

@param {Object} pedidoRepository - Repositorio inyectado para operaciones de persistencia

@example

// Uso del caso de uso:

const getPedidos = new GetPedidos(pedidoRepository);

const todosLosPedidos = await getPedidos.execute();
*/

export default class GetPedidos {
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute() {
    return await this.pedidoRepository.findAll();
  }
}
