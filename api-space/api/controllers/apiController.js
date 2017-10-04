"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitorModel = require("../models/visitorModel");
const baseController_1 = require("./baseController");
var VisitorLogSchema = require('mongoose').model('VisitorLog').schema;
let vsctrl = new baseController_1.default(visitorModel.default);
exports.register_a_visitor = (req, res) => {
    vsctrl.insert(req, res);
};
exports.get_visitor = (req, res) => {
    vsctrl.get(req, res);
};
exports.get_all = (req, res) => {
    vsctrl.getAll(req, res);
};
