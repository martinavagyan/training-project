"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = require("./baseController");
const mail_service_1 = require("../../mail-service");
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
            console.log(req.body);
            var newReqBody = {
                entryId: req.body.id,
                name: req.body.name,
                email: req.body.email,
                date: new Date(req.body.date),
                host: req.body.host
            };
            const obj = new this.model(newReqBody);
            obj.save((err, item) => {
                if (err)
                    return console.error(err);
                let mailOptions = {
                    from: 'working.space.inc@gmail.com',
                    to: req.body.host.email,
                    subject: `VERY IMPORTANT!!!!`,
                    text: `${req.body.name} is waiting for you, at the counter. `
                };
                console.log(req.body.comment);
                if (req.body.comment !== undefined) {
                    mailOptions.text = `${mailOptions.text} \n User comment: ${req.body.comment}`;
                }
                console.log(req.body.host.email);
                mail_service_1.default.sendMail(mailOptions);
                res.status(200).json(item);
            });
        };
        this.get = (req, res) => {
            this.model.findOne({ 'entryId': req.params.entryId }, function (err, obj) {
                if (err)
                    return console.error(err);
                res.json(obj);
            });
        };
    }
}
exports.default = Visit;
