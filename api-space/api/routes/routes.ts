import VisitorCtrl from '../../db/controllers/visitor';
import * as express from 'express';
let vsctrl = new VisitorCtrl();


module.exports = function(app: any) {
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

