var nodemailer = require('nodemailer');

export default class MailService{


    static transporter:any =nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'working.space.inc@gmail.com',
            pass: 'onepie2many'
        }
    });
    

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

