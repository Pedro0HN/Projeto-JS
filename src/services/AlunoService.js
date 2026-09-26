const prisma = require("../databases/prisma");
const AlunoInvalidoError = require("../errors/AlunoinvalidoError");
const PaginacaoInvalidaError = require("../errors/PaginacaoInvalidaError");
const OrdenacaoInvalidaError = require("../errors/OrdenacaoInvalidaError");
const AlunoNaoEncontradoError = require("../errors/AlunoNaoEncontradoError");
const EmailDuplicadoError = require("../errors/EmailDuplicadoError");

class AlunoService{
    async create(aluno){
        const {nome,email} = aluno;
        if(!nome || !email){
            throw new AlunoInvalidoError();
        }
        const novoAluno = await prisma.aluno.create({data:aluno});
        return novoAluno;
    }
    async findMany(page, pageSize, orderBy, order){
    page = Number(page);
    pageSize = Number(pageSize);

    if(!page || page < 1 || !pageSize || pageSize < 1){
        throw new PaginacaoInvalidaError();
    }
    if(order !== "asc" && order != "desc"){
        throw new OrdenacaoInvalidaError();
    }

    const alunos = await prisma.aluno.findMany({
        skip: (page - 1) * pageSize,
        take: Number(pageSize),
        orderBy: {
            [orderBy]: order
        }
    });

    const total = await prisma.aluno.count();

    return {
        alunos,
        total
    };
    }
    async findById(id){
        const aluno = await prisma.aluno.findUnique({
            where: {id: Number(id)}
            
        });
        if(!aluno){
            throw new AlunoNaoEncontradoError();
        }
        return aluno;
    }
    async update(id,dados){
        const {nome,email} = dados;

        if(!nome && !email){
            throw new AlunoInvalidoError("Envie ao menos nome e email");
        }
        await this.findById(id);

        try{
            const alunoAtualizado = await prisma.aluno.update({
                where: {id: Number(id)},
                data: dados
            });
            return alunoAtualizado;
        }catch(e){
            if(e.code === "P2002"){
                throw new EmailDuplicadoError();
            }
            throw e;
        }
    }


}

module.exports = new AlunoService();