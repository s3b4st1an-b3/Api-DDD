import mongoose from "mongoose";

const direccionSchema = new mongoose.Schema({
  calle: String,
  ciudad: String,
});

const itemSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
});

const pedidoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  telefono: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  items: [itemSchema],
  domicilio: { type: Boolean, default: false },
  direccion: direccionSchema,
  total: { type: Number, required: true },
});

const PedidoModel = mongoose.model("Pedido", pedidoSchema);

class PedidoRepositoryMongo {
  async create(data) {
    return await PedidoModel.create(data);
  }
  async findAll() {
    return await PedidoModel.find();
  }
  async findById(id) {
    return await PedidoModel.findById(id);
  }
  async update(id, data) {
    return await PedidoModel.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await PedidoModel.findByIdAndDelete(id);
  }
}

export default new PedidoRepositoryMongo();
