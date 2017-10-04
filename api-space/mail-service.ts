/**
 * Usage, improt the module anywhere you need to send email, 
 * @example import MailService from '../../mail-service';
 * 
*/

var nodemailer = require('nodemailer');

export default class MailService{

    static transporter:any =nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'working.space.inc@gmail.com',
            pass: 'onepie2many'
        }
    });

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
    static sendMail(mailOptions:Object){
        this.transporter.sendMail(mailOptions, function(error:any, info:any){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }
      
}

