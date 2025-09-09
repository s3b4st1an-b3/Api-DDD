export default class UpdatePedido {
  constructor(pedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute(id, data) {
    return await this.pedidoRepository.update(id, data);
  }
}
