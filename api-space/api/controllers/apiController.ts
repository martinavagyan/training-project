
import visitor from '../models/visitorModel';
import * as visitorModel from '../models/visitorModel'; 
import * as mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';
import BaseCtrl from './baseController';


var VisitorLogSchema = require('mongoose').model('VisitorLog').schema

let vsctrl = new BaseCtrl<Model<visitorModel.IVisitorLogModel>>(visitorModel.default);

exports.register_a_visitor = (req: any,res:any) => {  
    vsctrl.insert(req,res);   
}

exports.get_visitor = (req: any,res:any) => {  
  vsctrl.get(req,res);
}
exports.get_all = (req: any,res:any) => {  
  vsctrl.getAll(req,res);
}
  