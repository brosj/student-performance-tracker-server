"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const stud_enrollmentSchema = new Schema({
    admission_id: {
        type: Number,
        required: [true, `Student's admission ID is required.`],
        unique: true
    },
    fname: {
        type: String,
        required: [true, "First Name is required."],
    },
    lname: {
        type: String,
        required: [true, "Last Name is required."],
    },
    gender: {
        type: String,
        required: [true, "Gender is required."],
    },
    dob: {
        type: String,
        required: [true, "Date of birth is required."],
    },
    class: {
        type: String,
        required: [true, "Class is required."],
    },
    fee: {
        amount: { type: Number, default: 0 },
        paid: { type: Boolean, default: false },
        dueDate: { type: Date },
    },
    parent_email: {
        type: String,
        required: [true, "Parent email is required."],
        trim: true,
    },
    parent_alt_email: {
        type: String,
        trim: true,
    },
    parent_phone: {
        type: String,
        required: [true, "Parent phone number is required."],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
const Stud_enrollment = mongoose_1.default.model("Stud_enrollment", stud_enrollmentSchema);
exports.default = Stud_enrollment;
//# sourceMappingURL=stud_enrollment.js.map