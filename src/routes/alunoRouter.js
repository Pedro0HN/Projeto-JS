const express = require("express");
const AlunoController = require("../controllers/AlunoController");
const validarAluno = require("../middlewares/validarAluno");


const router = express.Router();

router.get("/",AlunoController.findMany);
router.post("/",validarAluno,AlunoController.create);

module.exports = router; 