const moment = require('moment');

class NotificationGenerator {

    generate(type, from, to, message, reference, seneca) {
        let time = moment().format('YYYY-MM-DDTHH:mmZ');
        let notification = {
            type,
            from,
            to,
            message,
            reference,
            time,
            status: 0,
        };
        seneca.act({ role: 'notification', cmd: 'createNotification', notification }, (error, result) => {
            return { error, result };
        });
    }
}

module.exports = new NotificationGenerator();
