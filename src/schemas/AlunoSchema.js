const z = require("zod");

const alunoSchema = z.object({
    nome: z.string().trim().min(3,"Nome muito curto"),
    email: z.string().trim().email("email invalido")
});

module.exports = alunoSchema;