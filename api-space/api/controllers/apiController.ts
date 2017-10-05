
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


let hostCtrl = new BaseCtrl<Model<hostModel.IHostLogModel>>(hostModel.default);
let visitCtrl = new VisitCtrl<Model<visitModel.IVisitLogModel>>(visitModel.default);

// Visitor functions
exports.register_a_visit = (req: any,res:any) => { 
    console.log("registering");
    visitCtrl.insert(req,res);   
}

exports.get_all_visits = (req: any,res:any) => {  
  visitCtrl.getAll(req,res);
}
exports.remove_a_visit = (req: any,res:any) => {  
  visitCtrl.delete(req,res);
}
exports.remove_all_visits = (req: any,res:any) => {  
  visitCtrl.deleteAll(req,res);
}
 
exports.sort_date = (req: any,res:any) => {  
  visitCtrl.getDate(req,res);
}

exports.filter_visits = (req: any,res:any) => {  
  visitCtrl.filterVisits(req,res);
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
exports.remove_a_host = (req: any,res:any) => {  
  hostCtrl.delete(req,res);
}
exports.remove_all_hosts = (req: any,res:any) => {  
  hostCtrl.deleteAll(req,res);
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

