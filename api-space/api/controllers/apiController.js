"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import models
const visitorModel = require("../models/visitorModel");
const hostModel = require("../models/hostModel");
const visitModel = require("../models/visitModel");
// email service
// create models controllers based on the baseController
const baseController_1 = require("./baseController");
const mail_service_1 = require("../../mail-service");
let visitorCtrl = new baseController_1.default(visitorModel.default);
let hostCtrl = new baseController_1.default(hostModel.default);
let visitCtrl = new baseController_1.default(visitModel.default);
// Visitor functions
exports.register_a_visitor = (req, res) => {
    visitorCtrl.insert(req, res);
};
exports.get_visitor = (req, res) => {
    visitorCtrl.get(req, res);
};
exports.get_all_visitors = (req, res) => {
    visitorCtrl.getAll(req, res);
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
// Email function
exports.send_email = (req, res) => {
    let mailOptions = {
        from: 'working.space.inc@gmail.com',
        to: 'martinavagyan@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    console.log(mail_service_1.default);
    mail_service_1.default.sendMail(mailOptions);
    res.sendStatus(200);
};
