"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = require("./baseController");
class Visit extends baseController_1.default {
    constructor(_model) {
        super(_model);
        this.insert = (req, res) => {
            /*
                for (let key in req.body) {
                    if (key == 'host') {
                        NewReqBody['hostId'] = req.body[key]._id;
                    }
                    NewReqBody[key] = req.body[key];
                }
                */
            let jsonHost = JSON.parse(req.body.host);
            console.log(req.body.date);
            var newReqBody = {
                entryId: req.body.id,
                name: req.body.name,
                email: req.body.email,
                date: new Date(req.body.date),
                hostId: jsonHost._id
            };
            console.log(newReqBody);
            const obj = new this.model(newReqBody);
            obj.save((err, item) => {
                if (err)
                    return console.error(err);
                res.status(200).json(item);
            });
        };
    }
}
exports.default = Visit;
