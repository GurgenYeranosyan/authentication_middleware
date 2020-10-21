class ErrorGenerator {

    createError(code, message) {
        return {
            errorCode: code,
            message
        };
    }
};

module.exports = new ErrorGenerator();
