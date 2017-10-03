import mongoose = require('mongoose');
import { Schema, Model, Document } from 'mongoose';

export interface IVisiteeLog {
    visiteeId   : string,
    name        : string,
    email       : string
}

const VisiteeLogSchema: Schema = new Schema({
    id          : String,
    name        : String,
    email       : String
  });

interface IVisiteeLogModel extends IVisiteeLog, Document {}
const VisiteeLogModel = 
    mongoose.model<IVisiteeLogModel>('VisitorLog', VisiteeLogSchema);

export default VisiteeLogModel;