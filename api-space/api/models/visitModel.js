"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const VisitLogSchema = new mongoose_1.Schema({
    hostId: String,
    entryId: String,
    name: String,
    email: String,
    date: Date
});
const VisitLogModel = mongoose.model('VisitLog', VisitLogSchema);
exports.default = VisitLogModel;
