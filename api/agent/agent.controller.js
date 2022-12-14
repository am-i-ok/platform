const AgentLogic = require("./agent.logic");

class AgentController {
  static async getAll(req, res, next) {
    try {
      const agents = await AgentLogic.getAll({});
      res.json(agents);
    } catch (err) {
      return next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const agent = await AgentLogic.getOne(req.params.name);
      res.json(agent);
    } catch (err) {
      // TODO handle errors correctly with status codes
      return next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const agent = await AgentLogic.create(req.body);
      res.json(agent);
    } catch (err) {
      return next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const agent = await AgentLogic.update(req.params.name, req.body);
      res.json(agent);
    } catch (err) {
      return next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      await AgentLogic.delete(req.params.name);
      res.json({});
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = AgentController;
