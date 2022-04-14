"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassFee = exports.getAllFees = void 0;
const fees_1 = __importDefault(require("../models/fees"));
// Get all classes fees
async function getAllFees() {
    return await fees_1.default.find({});
}
exports.getAllFees = getAllFees;
// Get single class fee
async function getClassFee(classId) {
    // try {
    const fee = await fees_1.default.findOne({ class: classId });
    return fee;
    // } catch (error) {
    //   return error;
    // }
}
exports.getClassFee = getClassFee;
//# sourceMappingURL=get_fees.js.map