const Agent = require("./agent.model");

class AgentLogic {
  static async getAll(filter) {
    return Agent.find(filter, undefined, { sort: { createdAt: -1 } });
  }

  static async getOne(name) {
    const res = await Agent.findOne({ name });
    if (!res) {
      throw new Error(`agent: ${name} does not exist`);
    }
    return res;
  }

  static async create(data) {
    const agent = new Agent(data);
    return agent.save();
  }

  static async update(name, { fieldToUpdate }) {
    const agent = await AgentLogic.getOne(name);
    if (agent) {
      agent.fieldToUpdate = fieldToUpdate;
      return agent.save();
    }
  }

  static async delete(name) {
    return Agent.remove({ name });
  }
}

module.exports = AgentLogic;
