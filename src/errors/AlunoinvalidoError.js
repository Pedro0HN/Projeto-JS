const ApiError = require("./ApiError");

class AlunoInvalidoError extends ApiError{
    constructor(message="nome e email são obg",statusCode = 400){
        super(message,statusCode);
    }
}

module.exports = AlunoInvalidoError;