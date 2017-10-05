import { Schema, Model, Document } from 'mongoose';

export default class Base<T extends any> {
    sortDir: number = 1;
    model: T;

    constructor(_model: T) {
        this.model = _model;
    }
    public getAll = (req: any, res: any) => {
        this.model.find({}, (err: any, docs: any) => {
            if (err) { return console.error(err); }
            res.json(docs);
        });
    }

    public getDate = (req: any, res: any) => {
        let x = this.model.find({}).sort({ date: this.sortDir }).exec((err: any, docs: any) => {
            if (err) { return console.log(err); }
            if (this.sortDir == 1) {
                this.sortDir = -1;
            } else {
                this.sortDir = 1;
            } 
            res.json(docs);
        })
    }
    public filterVisits = (req: any, res: any) => {
        console.log(typeof(req.params.filterDate));
        this.model.find({"date" : { $gte : new Date(req.params.filterDate) }}, (err: any, docs: any) => {
            res.json(docs);
        })   
    }


    public insert = (req: any, res: any) => {
        const obj = new this.model(req.body);
        obj.save((err: any, item: any) => {
            if (err) return console.error(err);
            res.status(200).json(item);
        });
    }
    public delete = (req: any, res: any) => {
        this.model.findOneAndRemove({ id: req.params.id }, (err: any, obj: any) => {
            if (err) return console.error(err);
            res.sendStatus(200);
        })
    }
    public deleteAll = (req: any, res: any) => {
        console.log("deleting");
        this.model.remove({}, (err: any) => {
            if (err) return console.error(err);
            res.sendStatus(200);
        });
    }
    public update = (req: any, res: any) => {
        this.model.findOneAndUpdate({ id: req.params.id }, req.body, (err: any) => {
            if (err) return console.error(err);
            res.sendStatus(200);
        })
    }
    public get = (req: any, res: any) => {
        this.model.findOne({ 'entryId': req.params.entryId }, function (err: any, obj: any) {
            if (err) return console.error(err);
            res.json(obj);
        });
    }
}

