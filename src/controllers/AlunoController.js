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
        let {page,pageSize,orderBy,order} = req.query;
        page ||= 1;
        pageSize ||= 10;
        orderBy ||= "id";
        order ||= "asc";

        const resultado = await alunoService.findMany(
            page,
            pageSize,
            orderBy,
            order

        );

        return res.status(200).json(resultado);

        }catch(e){
            return res.status(e.statusCode).json({
                error: e.message
            });
        }
    }
    async findById(req,res){
        try{
            const {id} = req.params;
            const aluno = await alunoService.findById(id);
            return res.status(200).json({aluno});
        }catch(e){
            return res.status(e.statusCode).json({error: e.message});
        }
    }
}

module.exports = new AlunoController(); 