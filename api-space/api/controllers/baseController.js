"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(_model) {
        this.getAll = (req, res) => {
            this.model.find({}, (err, docs) => {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            });
        };
        this.insert = (req, res) => {
            console.log('troll');
            const obj = new this.model(req.body);
            obj.save((err, item) => {
                if (err)
                    return console.error(err);
                res.status(200).json(item);
            });
        };
        this.delete = (req, res) => {
            this.model.findOneAndRemove({ id: req.params.id }), (err, obj) => {
                if (err)
                    return console.error(err);
                res.sendStatus(200);
            };
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
