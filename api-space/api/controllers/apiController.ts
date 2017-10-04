
//load mongoose & types
import * as mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';

// import models
import * as visitorModel from '../models/visitorModel'; 
import * as hostModel from '../models/hostModel'; 
import * as visitModel from '../models/visitModel'; 

// email service

// create models controllers based on the baseController
import BaseCtrl from './baseController';

import VisitCtrl from './visitController';
import MailService from '../../mail-service';


let visitorCtrl = new BaseCtrl<Model<visitorModel.IVisitorLogModel>>(visitorModel.default);
let hostCtrl = new BaseCtrl<Model<hostModel.IHostLogModel>>(hostModel.default);
let visitCtrl = new VisitCtrl<Model<visitModel.IVisitLogModel>>(visitModel.default);

// Visitor functions
exports.register_a_visit = (req: any,res:any) => {  
    visitCtrl.insert(req,res);   
}
exports.get_visitor = (req: any,res:any) => {  
  visitorCtrl.get(req,res);
}
exports.get_all_visits = (req: any,res:any) => {  
  visitCtrl.getAll(req,res);
}
 
// Host functions
exports.register_a_host = (req: any,res:any) => {  
  hostCtrl.insert(req,res);   
}
exports.get_hosts = (req: any,res:any) => {  
  hostCtrl.get(req,res);
}
exports.get_all_hosts = (req: any,res:any) => {  
  hostCtrl.getAll(req,res);
}

// Email function

exports.send_email = (req: any, res:any) =>{
  let mailOptions = {
    from: 'working.space.inc@gmail.com',
    to: 'martinavagyan@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  console.log(MailService);


  MailService.sendMail(mailOptions);
  res.sendStatus(200);
}

