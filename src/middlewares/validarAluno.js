const alunoSchema = require("../schemas/AlunoSchema");

const validarAluno = (req,res,next) => {
    const result = alunoSchema.safeParse(req.body);
    if(!result.success){
        const errors = result.error.issues.map((e)=> {
            return {
                campo: e.path[0],
                message: e.message
            }
        });
        return res.status(400).json({error: errors});
    }
    req.body = result.data;
    next();
}
module.exports = validarAluno