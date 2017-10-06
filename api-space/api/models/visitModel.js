"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const VisitLogSchema = new mongoose_1.Schema({
    host: Object,
    entryId: String,
    picture: String,
    name: String,
    email: String,
    date: Date
});
const VisitLogModel = mongoose.model('VisitLog', VisitLogSchema);
exports.default = VisitLogModel;
