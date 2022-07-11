const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tuannhan6@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name} `
    })
}

module.exports = {
    sendWelcomeEmail
}