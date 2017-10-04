import mongoose = require('mongoose');
import { Schema, Model, Document } from 'mongoose';

export interface IVisitLog {
  timestamp : Date,
  visiteeId : string,
  visitorId : string,
  entryId   : string
}

const VisitLogSchema: Schema = new Schema({
    timestamp   : Date,
    visiteeId   : String,
    visitorId   : String,
    entryId     : String
  });

export interface IVisitLogModel extends IVisitLog, Document {}
const VisitLogModel = 
      mongoose.model<IVisitLogModel>('VisitLog', VisitLogSchema);

export default VisitLogModel;