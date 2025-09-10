import { UserModel } from "../../../domain/models/user/User.js";
import bcrypt from "bcrypt";

export class UserRepositoryMongo {
  async create(data) {
    const user = new UserModel(data);
    return await user.save();
  }

  async findAll() {
    return await UserModel.find();
  }

  async findById(id) {
    return await UserModel.findById(id);
  }

  async update(id, data) {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await UserModel.findByIdAndDelete(id);
  }
}
