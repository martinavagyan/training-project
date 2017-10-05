"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let apiController = require('../controllers/apiController');
module.exports = function (app) {
    const router = express.Router();
    // todoList Routes
    app.route('/api/visit/').post(apiController.register_a_visit);
    app.route('/api/get-all-visits').get(apiController.get_all_visits);
    app.route('/api/get-all-hosts').get(apiController.get_all_hosts);
    app.route('/api/register-host').post(apiController.register_a_host);
    app.route('/api/remove-all-hosts').post(apiController.remove_all_hosts);
    app.route('/api/remove-all-visits').post(apiController.remove_all_visits);
    //app.route('/api/get-host/:hostId').get(apiController.get_host);
    //One test endpoint
    app.route('/api/test/').get(apiController.send_email);
};
