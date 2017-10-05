"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(_model) {
        this.sortDir = 1;
        this.getAll = (req, res) => {
            this.model.find({}, (err, docs) => {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            });
        };
        this.getDate = (req, res) => {
            let x = this.model.find({}).sort({ date: this.sortDir }).exec((err, docs) => {
                if (err) {
                    return console.log(err);
                }
                if (this.sortDir == 1) {
                    this.sortDir = -1;
                }
                else {
                    this.sortDir = 1;
                }
                res.json(docs);
            });
        };
        this.filterVisits = (req, res) => {
            console.log(typeof (req.params.filterDate));
            this.model.find({ "date": { $gte: new Date(req.params.filterDate) } }, (err, docs) => {
                res.json(docs);
            });
        };
        this.insert = (req, res) => {
            const obj = new this.model(req.body);
            obj.save((err, item) => {
                if (err)
                    return console.error(err);
                res.status(200).json(item);
            });
        };
        this.delete = (req, res) => {
            this.model.findOneAndRemove({ id: req.params.id }, (err, obj) => {
                if (err)
                    return console.error(err);
                res.sendStatus(200);
            });
        };
        this.deleteAll = (req, res) => {
            console.log("deleting");
            this.model.remove({}, (err) => {
                if (err)
                    return console.error(err);
                res.sendStatus(200);
            });
        };
        this.update = (req, res) => {
            this.model.findOneAndUpdate({ id: req.params.id }, req.body, (err) => {
                if (err)
                    return console.error(err);
                res.sendStatus(200);
            });
        };
        this.get = (req, res) => {
            this.model.findOne({ 'entryId': req.params.entryId }, function (err, obj) {
                if (err)
                    return console.error(err);
                res.json(obj);
            });
        };
        this.model = _model;
    }
}
exports.default = Base;
