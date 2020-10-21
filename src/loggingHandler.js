class LoggingHandler {

    log(email, action, oldValue, newValue, seneca) {
        let logData = {
            email: email,
            action: action,
            old_value: oldValue,
            new_value: newValue
        };
        seneca.act({ role: 'logging', cmd: 'logger', logData }, (error, result) => {
            return { error, result };
        });
    }
}

module.exports = new LoggingHandler();
