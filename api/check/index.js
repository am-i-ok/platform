const express = require("express");
const CheckController = require("./check.controller");

const router = express.Router();

router.get("/", CheckController.getAll);
router.get("/:name", CheckController.getOne);
router.post("/", CheckController.create);
router.put("/:name", CheckController.update);
router.delete("/:name", CheckController.delete);
router.post("/report", CheckController.report);

module.exports = router;
