"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const VisitorLogSchema = new mongoose_1.Schema({
    visitorId: String,
    name: String,
    email: String
});
const VisitorLogModel = mongoose.model('VisitorLog', VisitorLogSchema);
exports.default = VisitorLogModel;
