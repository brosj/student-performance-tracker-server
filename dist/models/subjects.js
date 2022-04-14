"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const subjectsSchema = new Schema({
    class: {
        type: String,
        required: [true, "Class is required."],
    },
    subjects: {
        type: Array,
        required: [true, "Add class subjects."],
    },
});
const Subject_catalogue = mongoose_1.default.model("subject_catalogue", subjectsSchema);
exports.default = Subject_catalogue;
//# sourceMappingURL=subjects.js.map