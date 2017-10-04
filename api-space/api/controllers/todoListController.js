"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitor_1 = require("../../db/controllers/visitor");
//var base = mongoose.model('VisitorLog',VisitorLogSchema);
var VisitorLogSchema = require('mongoose').model('VisitorLog').schema;
//console.log(VisitorCtrl.prototype.insert(1,2));
let vsctrl = new visitor_1.default();
exports.register_a_visitor = (req, res) => {
    //console.log(req.body);
    //VisitorCtrl.prototype.insert(req,res);
    vsctrl.insert(req, res);
    //res.json(req.body)
};
exports.get_visitor = (req, res) => {
    vsctrl.get(req, res);
};
exports.get_all = (req, res) => {
    vsctrl.getAll(req, res);
};
// exports.list_all_tasks = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// exports.delete_a_task = function(req, res) {
//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// }; 
