"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitor_1 = require("../../db/controllers/visitor");
const express = require("express");
let vsctrl = new visitor_1.default();
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');
    const router = express.Router();
    // todoList Routes
    app.route('/api/visitor/')
        .post(todoList.register_a_visitor);
    app.route('/api/get-visitor/:visitorId').get(todoList.get_visitor);
    app.route('/api/get-all-visitors').get(todoList.get_all);
    // app.route('/api/get-visitor/:id')
    // .get(todoList.get_visitor);
    //   app.route('/api/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};
