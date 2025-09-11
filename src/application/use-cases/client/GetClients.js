/**

Caso de uso para la obtención de todos los clientes del sistema.

Esta clase implementa el patrón de caso de uso, encapsulando la lógica de negocio

específica para la recuperación del listado completo de clientes. Coordina la operación

de consulta masiva con el repositorio de persistencia, manteniendo una separación clara

de responsabilidades.

Responsabilidades:

Solicitar al repositorio la recuperación de todos los clientes existentes

Retornar el listado completo de clientes al controlador

Mantener una interfaz consistente para posibles futuras implementaciones de

paginación, filtrado u ordenamiento

Sigue el principio de inversión de dependencias (DIP) al recibir el repositorio

como dependencia inyectada, lo que permite una fácil sustitución para testing

o cambios en el mecanismo de persistencia sin afectar la lógica de negocio.

@class GetClients

@param {Object} clientRepository - Repositorio inyectado para operaciones de persistencia de clientes

@example

// Uso del caso de uso:

const getClients = new GetClients(clientRepository);

const todosLosClientes = await getClients.execute();
*/

export default class GetClients {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute() {
    return await this.clientRepository.findAll();
  }
}
