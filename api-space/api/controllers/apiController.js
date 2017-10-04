"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import models
const visitorModel = require("../models/visitorModel");
const hostModel = require("../models/hostModel");
const visitModel = require("../models/visitModel");
// create models controllers based on the baseController
const baseController_1 = require("./baseController");
const visitController_1 = require("./visitController");
let visitorCtrl = new baseController_1.default(visitorModel.default);
let hostCtrl = new baseController_1.default(hostModel.default);
let visitCtrl = new visitController_1.default(visitModel.default);
// Visitor functions
exports.register_a_visit = (req, res) => {
    visitCtrl.insert(req, res);
};
exports.get_visitor = (req, res) => {
    visitorCtrl.get(req, res);
};
exports.get_all_visits = (req, res) => {
    visitCtrl.getAll(req, res);
};
// Host functions
exports.register_a_host = (req, res) => {
    hostCtrl.insert(req, res);
};
exports.get_hosts = (req, res) => {
    hostCtrl.get(req, res);
};
exports.get_all_hosts = (req, res) => {
    hostCtrl.getAll(req, res);
};
