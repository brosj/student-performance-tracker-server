"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyChildren = exports.readStudent = exports.readAllStudents = void 0;
const stud_enrollment_1 = __importDefault(require("../models/stud_enrollment"));
// Get all enrolled students
async function readAllStudents(_req, res) {
    try {
        const students = await stud_enrollment_1.default.find({});
        res.status(200).send(students);
        return students;
    }
    catch (error) {
        res.status(500).json({ error: "No student available." });
        return false;
    }
}
exports.readAllStudents = readAllStudents;
// Get single enrolled student
async function readStudent(req, res) {
    try {
        const admissionId = req.params.admissionId;
        const student = await stud_enrollment_1.default.findOne({
            admission_id: admissionId,
        });
        student ? res.status(200).send(student) : res.status(500).json({ error: "No student found matching admission ID." });
        return student;
    }
    catch (error) {
        res.status(500).json({ error: "No student found matching admission ID." });
        return false;
    }
}
exports.readStudent = readStudent;
// Return children on Parent Dashboard
async function getMyChildren(req, res) {
    try {
        const email = req.body.login_email;
        const children = await stud_enrollment_1.default.find({ parent_email: email });
        res.status(200).send(children);
        return children;
    }
    catch (error) {
        res.status(500).json({ error: "No student enrolled." });
        return false;
    }
}
exports.getMyChildren = getMyChildren;
//# sourceMappingURL=get_students.js.map