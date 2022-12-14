const CheckLogic = require("./check.logic");

class CheckController {
  static async getAll(req, res, next) {
    try {
      const agents = await CheckLogic.getAll({});
      res.json(agents);
    } catch (err) {
      return next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const agent = await CheckLogic.getOne(req.params.name);
      res.json(agent);
    } catch (err) {
      // TODO handle errors correctly with status codes
      return next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const agent = await CheckLogic.create(req.body);
      res.json(agent);
    } catch (err) {
      return next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const agent = await CheckLogic.update(req.params.name, req.body);
      res.json(agent);
    } catch (err) {
      return next(err);
    }
  }

  static async report(req, res, next) {
    try {
      const { status, checkName } = req.body;
      const agent = await CheckLogic.getOne(checkName);
      agent.results.push({
        date: new Date(),
        status,
      });
      await agent.save();
      res.json({});
    } catch (err) {
      return next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      await CheckLogic.delete(req.params.name);
      res.json({});
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = CheckController;
