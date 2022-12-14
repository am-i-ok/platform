const Check = require("./check.model");

class CheckLogic {
  static async getAll(filter) {
    return Check.find(filter, undefined, { sort: { createdAt: -1 } }).populate(
      "agents"
    );
  }

  static async getOne(name) {
    const res = await Check.findOne({ name });
    if (!res) {
      throw new Error(`agent: ${name} does not exist`);
    }
    return res;
  }

  static async create(data) {
    const check = new Check(data);
    return check.save();
  }

  static async update(name, { fieldToUpdate }) {
    const check = await CheckLogic.getOne(name);
    if (check) {
      check.fieldToUpdate = fieldToUpdate;
      return check.save();
    }
  }

  static async delete(name) {
    return Check.remove({ name });
  }
}

module.exports = CheckLogic;
