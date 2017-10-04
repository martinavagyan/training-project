"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const VisiteeLogSchema = new mongoose_1.Schema({
    entryId: String,
    name: String,
    email: String
});
const VisiteeLogModel = mongoose.model('VisitorLog', VisiteeLogSchema);
exports.default = VisiteeLogModel;
