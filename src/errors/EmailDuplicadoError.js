const ApiError = require("./ApiError");

class EmailDuplicadoError extends ApiError{
    constructor (message = "Este email jáa esta cadastrado para outro aluno",statusCode = 400){
        super(message,statusCode);
    }
}
module.exports = EmailDuplicadoError;