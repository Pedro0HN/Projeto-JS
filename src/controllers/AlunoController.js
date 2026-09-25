const alunoService = require("../services/AlunoService");

class AlunoController{
    async create (req,res){
        try{
        const aluno = await alunoService.create(req.body);
        return res.status(201).json({aluno});
        }catch(e){
            return res.status(e.statusCode).json({error: e.message});
        }
    }
    async findMany(req,res){
        try{
        let {page,pageSize} = req.query;
        page ||= 1;
        pageSize ||= 10;

        const alunos = await alunoService.findMany(page,pageSize);
        return Response.status(200).json({alunos});
        }catch(e){
            return res.status(e.statusCode).json({
                error: e.message
            });
        }
    }
}

module.exports = new AlunoController(); 