"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readParent = exports.readAllParents = void 0;
const parent_registation_1 = __importDefault(require("../models/parent_registation"));
// Get all parents
async function readAllParents(_req, res) {
    try {
        const parents = await parent_registation_1.default.find({});
        res.status(200).send(parents);
    }
    catch (error) {
        res.status(500).json({ error: "No parent available." });
    }
}
exports.readAllParents = readAllParents;
// Get single parent
async function readParent(req, res) {
    try {
        const email = req.params.email;
        const parent = await parent_registation_1.default.findOne({ parent_email: email });
        parent ? res.status(200).send(parent) : res.status(500).json({ error: "No parent found matching email." });
    }
    catch (error) {
        res.status(500).json({ error: "No parent found matching email." });
    }
}
exports.readParent = readParent;
//# sourceMappingURL=get_parents.js.map