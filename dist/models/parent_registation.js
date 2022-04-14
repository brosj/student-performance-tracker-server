"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const parent_registrationSchema = new Schema({
    parent_fname: {
        type: String,
        required: [true, "Parent's first Name is required."],
    },
    parent_lname: {
        type: String,
        required: [true, "Parent's last Name is required"],
    },
    parent_gender: {
        type: String,
        required: [true, "Parent's gender is required"],
    },
    parent_email: {
        type: String,
        required: [true, "Parent's email is required"],
        trim: true,
        unique: true,
    },
    parent_alt_email: {
        type: String,
        trim: true,
        unique: true,
    },
    parent_phone: {
        type: String,
        required: [true, "Parent's phone number is required"],
    },
    street: {
        type: String,
        required: [true, "Address incomplete. Input street."],
    },
    city: {
        type: String,
        required: [true, "Address incomplete. Input city."],
    },
    state: {
        type: String,
        required: [true, "Address incomplete. Input state."],
    },
    country: {
        type: String,
        required: [true, "Address incomplete. Input country."],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
    },
    notification: {
        type: [
            {
                title: {
                    type: String,
                    required: [true, "Add a notification title."],
                },
                description: {
                    type: String,
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
            },
        ],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
const Parent_registration = mongoose_1.default.model("Parent_registration", parent_registrationSchema);
exports.default = Parent_registration;
//# sourceMappingURL=parent_registation.js.map