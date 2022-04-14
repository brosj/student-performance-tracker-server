"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNotification = void 0;
const parent_registation_1 = __importDefault(require("../models/parent_registation"));
async function addNotification(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const newNotification = { title, description };
    await parent_registation_1.default.update({}, { $push: { notification: { $each: [newNotification], $position: 0 } } });
    res.status(200).send({ msg: "Notification added successfully." });
}
exports.addNotification = addNotification;
//# sourceMappingURL=add_notification.js.map