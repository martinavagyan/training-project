var nodemailer = require('nodemailer');

export default class MailService{

    transporter:any;

    constructor(){
        this.transporter =nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'working.space.inc@gmail.com',
              pass: 'onepie2many'
            }
        });
    }

    sendMail(mailOptions:Object){
        this.transporter.sendMail(mailOptions, function(error:any, info:any){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }
      
}

