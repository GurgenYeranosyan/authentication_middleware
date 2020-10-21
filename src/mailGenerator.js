class MailGenerator {

    generate(mailData, seneca) {
        seneca.act({ role: 'mail', cmd: 'sendMail', mailData }, (error, result) => {
            return { error, result };
        });
    }
}

module.exports = new MailGenerator();
