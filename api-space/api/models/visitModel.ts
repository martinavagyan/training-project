import mongoose = require('mongoose');
import { Schema, Model, Document } from 'mongoose';

export interface IVisitLog {
  hostId      : string,
  entryId     : string,
  name        : string,
  email       : string,
  date        : Date
}

const VisitLogSchema: Schema = new Schema({
    hostId      : String,
    entryId     : String,
    name        : String,
    email       : String,
    date        : Date
  });

export interface IVisitLogModel extends IVisitLog, Document {}
const VisitLogModel = 
      mongoose.model<IVisitLogModel>('VisitLog', VisitLogSchema);

export default VisitLogModel;