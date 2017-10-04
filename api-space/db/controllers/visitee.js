"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visitee_1 = require("../models/visitee");
const base_1 = require("./base");
class VisiteeCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = visitee_1.default;
    }
}
exports.default = VisiteeCtrl;
