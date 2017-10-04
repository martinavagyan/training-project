"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visit_1 = require("../models/visit");
const base_1 = require("./base");
class VisitCtrl extends base_1.default {
    constructor() {
        super(...arguments);
        this.model = visit_1.default;
    }
}
exports.default = VisitCtrl;
