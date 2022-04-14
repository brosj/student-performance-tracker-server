"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const feesSchema = new Schema({
    class: {
        type: String,
        required: [true, "Class is required."],
    },
    amount: {
        type: Number,
        required: [true, "Fee amount is required."],
    },
    dueDate: {
        type: Date,
        required: [true, "Fee due date is required."],
    },
});
const Fees_catalogue = mongoose_1.default.model("fees_catalogue", feesSchema);
exports.default = Fees_catalogue;
//# sourceMappingURL=fees.js.map