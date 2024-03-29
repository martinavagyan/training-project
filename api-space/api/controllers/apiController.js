"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hostModel = require("../models/hostModel");
const visitModel = require("../models/visitModel");
// email service
// create models controllers based on the baseController
const baseController_1 = require("./baseController");
const visitController_1 = require("./visitController");
const mail_service_1 = require("../../mail-service");
let hostCtrl = new baseController_1.default(hostModel.default);
let visitCtrl = new visitController_1.default(visitModel.default);
// Visitor functions
exports.register_a_visit = (req, res) => {
    console.log("registering");
    visitCtrl.insert(req, res);
};
exports.get_all_visits = (req, res) => {
    visitCtrl.getAll(req, res);
};
exports.remove_a_visit = (req, res) => {
    visitCtrl.delete(req, res);
};
exports.remove_all_visits = (req, res) => {
    visitCtrl.deleteAll(req, res);
};
exports.sort_date = (req, res) => {
    visitCtrl.getDate(req, res);
};
exports.filter_visits = (req, res) => {
    visitCtrl.filterVisits(req, res);
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
exports.remove_a_host = (req, res) => {
    hostCtrl.delete(req, res);
};
exports.remove_all_hosts = (req, res) => {
    hostCtrl.deleteAll(req, res);
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
