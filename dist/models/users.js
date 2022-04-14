"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const usersSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        default: "",
    }
});
const UserLogin = mongoose_1.default.model("user", usersSchema);
exports.default = UserLogin;
//# sourceMappingURL=users.js.map