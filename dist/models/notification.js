"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const notificationSchema = new Schema({
    title: {
        type: String,
        required: [true, "Add a notification title."],
    },
    description: {
        type: Number,
        required: [true, "Add notification description."],
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    read: {
        type: Boolean,
        default: false,
    },
});
const NotificationModel = mongoose_1.default.model("notification", notificationSchema);
exports.default = NotificationModel;
//# sourceMappingURL=notification.js.map