"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
module.exports = function (app) {
    var todoList = require('../controllers/apiController');
    const router = express.Router();
    // todoList Routes
    app.route('/api/visitor/')
        .post(todoList.register_a_visitor);
    app.route('/api/get-visitor/:visitorId').get(todoList.get_visitor);
    app.route('/api/get-all-visitors').get(todoList.get_all);
};
