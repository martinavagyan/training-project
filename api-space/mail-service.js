"use strict";
/**
 * Usage, improt the module anywhere you need to send email,
 * @example import MailService from '../../mail-service';
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require('nodemailer');
class MailService {
    /**
     * Usage:
     * sendMail is static, thus no initialization of the class is required
     * @param, {Object} mailOptions is an object of sender's detials
     * @example let mailOptions = {
     *               from: 'working.space.inc@gmail.com',
     *               to: 'martinavagyan@gmail.com',
     *               subject: 'Sending Email using Node.js',
     *               text: 'That was easy!'
     *           };
     *
    */
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
