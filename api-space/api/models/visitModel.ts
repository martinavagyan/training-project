import mongoose = require('mongoose');
import { User } from './user';
import { Schema, Model, Document } from 'mongoose';

export interface IVisitLog {
  host        : User,
  entryId     : string,
  name        : string,
  email       : string,
  date        : Date
}

const VisitLogSchema: Schema = new Schema({
    host        : Object,
    entryId     : String,
    name        : String,
    email       : String,
    date        : Date
  });

export interface IVisitLogModel extends IVisitLog, Document {}
const VisitLogModel = 
      mongoose.model<IVisitLogModel>('VisitLog', VisitLogSchema);

export default VisitLogModel;