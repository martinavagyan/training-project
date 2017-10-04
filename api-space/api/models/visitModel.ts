import mongoose = require('mongoose');
import { Schema, Model, Document } from 'mongoose';

export interface IVisitLog {
  timestamp : Date,
  visiteeId : string,
  visitorId : string
}

const VisitLogSchema: Schema = new Schema({
    timestamp   : Date,
    visiteeId   : String,
    visitorId   : String
  });

interface IVisitLogModel extends IVisitLog, Document {}
const VisitLogModel = 
      mongoose.model<IVisitLogModel>('VisitLog', VisitLogSchema);

export default VisitLogModel;