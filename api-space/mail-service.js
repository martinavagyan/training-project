"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require('nodemailer');
class MailService {
    static sendMail(mailOptions) {
        this.transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}
MailService.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'working.space.inc@gmail.com',
        pass: 'onepie2many'
    }
});
exports.default = MailService;
