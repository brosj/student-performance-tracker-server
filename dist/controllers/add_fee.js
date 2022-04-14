"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFee = void 0;
const fees_1 = __importDefault(require("../models/fees"));
async function addFee(req, res) {
    const filter = { class: req.body.class };
    const update = { amount: req.body.amount, dueDate: req.body.dueDate };
    await fees_1.default.findOneAndUpdate(filter, update, {
        upsert: true,
        new: true,
    });
    res.status(200).send({ msg: `${req.body.class} fee updated successfully.` });
}
exports.addFee = addFee;
//# sourceMappingURL=add_fee.js.map