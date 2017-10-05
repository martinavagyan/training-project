import { Schema, Model, Document } from 'mongoose';
import * as bodyParser from 'body-parser';
import Base from './baseController';

interface INewReqBody {
    entryId : string,
    vname   : string,
    email   : string,
    date    : Date,
    hashId  : String
}

export default class Visit<T extends any> extends Base<T> {
    constructor(_model : T) {
        super(_model);
    }
    public insert = (req: any , res: any) => {
               
    /*
        for (let key in req.body) {
            if (key == 'host') {
                NewReqBody['hostId'] = req.body[key]._id;
            }
            NewReqBody[key] = req.body[key];
        }
        */
        
        var newReqBody = {
            entryId     : req.body.id,
            name       : req.body.name,
            email       : req.body.email,
            date        : new Date(req.body.date),
            hostId      : req.body.host._id
        }
        const obj = new this.model(newReqBody);
        obj.save( (err:any, item:any) => {
            if (err) return console.error(err);
            res.status(200).json(item);
        });
        
    }
}