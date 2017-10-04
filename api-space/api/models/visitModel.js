"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const VisitLogSchema = new mongoose_1.Schema({
    timestamp: Date,
    visiteeId: String,
    visitorId: String
});
const VisitLogModel = mongoose.model('VisitLog', VisitLogSchema);
exports.default = VisitLogModel;
