const express = require("express");
const AlunoController = require("../controllers/AlunoController");
const validarAluno = require("../middlewares/validarAluno");

const router = express.Router();

router.get("/",AlunoController.findMany);
router.get("/:id",AlunoController.findById);
router.post("/",validarAluno,AlunoController.create);
router.put("/:id",AlunoController.update);

module.exports = router;