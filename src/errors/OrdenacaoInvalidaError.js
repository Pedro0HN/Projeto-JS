const ApiError = require("./ApiError");

class OrdenacapInvalidaError extends ApiError{
    constructor (message = "A ordenação deve ser 'asc' ou 'desc'",statusCode = 400){
        super(message,statusCode);
    }
}

module.exports = OrdenacapInvalidaError;