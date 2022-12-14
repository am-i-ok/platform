const express = require("express");
const AgentController = require("./agent.controller");

const router = express.Router();

router.get("/", AgentController.getAll);
router.get("/:name", AgentController.getOne);
router.post("/", AgentController.create);
router.put("/:name", AgentController.update);
router.delete("/:name", AgentController.delete);

module.exports = router;
