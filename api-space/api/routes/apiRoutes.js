"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let apiController = require('../controllers/apiController');
module.exports = function (app) {
    const router = express.Router();
    // todoList Routes
    app.route('/api/visit/').post(apiController.register_a_visit);
    app.route('/api/get-visitor/:visitorId').get(apiController.get_visitor);
    app.route('/api/get-all-visits').get(apiController.get_all_visits);
    //app.route('/api/get-all-hosts').get(apiController.get_all_hosts);
    //app.route('/api/get-host/:hostId').get(apiController.get_host);
    //app.route('/api/get-visit/:visitId').get(apiController.get_visit);
    //app.route('/api/get-all-visits').get(apiController.get_all_visits);
    //One test endpoint
    app.route('/api/test/').get(apiController.send_email);
};
