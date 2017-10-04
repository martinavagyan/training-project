"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const HostLogSchema = new mongoose_1.Schema({
    entryId: String,
    name: String,
    email: String
});
const HostLogModel = mongoose.model('HostLog', HostLogSchema);
exports.default = HostLogModel;
