import { Schema, Model, Document } from 'mongoose';
import * as bodyParser from 'body-parser';
import Base from './baseController';
import MailService from '../../mail-service';
interface INewReqBody {
    entryId: string,
    vname: string,
    email: string,
    date: Date,
    hashId: String
}

export default class Visit<T extends any> extends Base<T> {
    constructor(_model: T) {
        super(_model);
    }
    public insert = (req: any, res: any) => {

        /*
            for (let key in req.body) {
                if (key == 'host') {
                    NewReqBody['hostId'] = req.body[key]._id;
                }
                NewReqBody[key] = req.body[key];
            }
            */
        console.log(req.body);
        var newReqBody = {
            entryId: req.body.id,
            name: req.body.name,
            email: req.body.email,
            date: new Date(req.body.date),
            hostId: req.body.host._id
        }
        const obj = new this.model(newReqBody);
        obj.save((err: any, item: any) => {
            if (err) return console.error(err);
            let mailOptions = {
                from: 'working.space.inc@gmail.com',
                to: req.body.host.email,
                subject: `VERY IMPORTANT!!!!`,
                text: `${req.body.name} is waiting for you, at the counter. `
            };
            console.log(req.body.comment);
            if (req.body.comment !== undefined) {
                mailOptions.text = `${mailOptions.text} \n User comment: ${req.body.comment}`
            }
            console.log(req.body.host.email);
            MailService.sendMail(mailOptions);

            res.status(200).json(item);
        });

    }
}