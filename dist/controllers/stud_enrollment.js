"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentEnroller = exports.doesParentExist = void 0;
const parent_registation_1 = __importDefault(require("../models/parent_registation"));
const stud_enrollment_1 = __importDefault(require("../models/stud_enrollment"));
const users_1 = __importDefault(require("../models/users"));
const get_fees_1 = require("./get_fees");
const get_parents_1 = require("./get_parents");
const studentEnroller = async (req, res) => {
    try {
        const classFee = await (0, get_fees_1.getClassFee)(req.body.class);
        // ----------- EDIT SEARCH EMAIL PARAM ------------- //
        const parent = await (0, get_parents_1.readParent)(req, res);
        const student_enrollSchema = {
            admission_id: generateAdmissionID(),
            fname: req.body.fname,
            lname: req.body.lname,
            gender: req.body.gender,
            dob: req.body.dob,
            class: req.body.class,
            fee: { amount: classFee.amount, dueDate: classFee.dueDate },
            parent_email: req.body.parent_email,
            parent_alt_email: req.body.parent_alt_email,
            parent_phone: req.body.parent_phone,
        };
        const parent_regSchema = {
            parent_fname: req.body.parent_fname,
            parent_lname: req.body.parent_lname,
            parent_gender: req.body.parent_gender,
            parent_email: req.body.parent_email,
            parent_alt_email: req.body.parent_alt_email,
            parent_phone: req.body.parent_phone,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
        };
        const user1_Schema = {
            email: req.body.parent_email,
        };
        const user2_Schema = {
            email: req.body.parent_alt_email,
        };
        if (parent) {
            await stud_enrollment_1.default.create(student_enrollSchema);
        }
        else {
            await stud_enrollment_1.default.create(student_enrollSchema);
            await parent_registation_1.default.create(parent_regSchema);
            await users_1.default.create(user1_Schema);
            if (req.body.parent_alt_email) {
                await users_1.default.create(user2_Schema);
            }
        }
        res.status(200).json({
            message: "Registration successful.",
        });
    }
    catch (error) {
        console.log("ERROR", error);
        res.status(500).json({
            message: "Error. Registration failed.",
        });
    }
};
exports.studentEnroller = studentEnroller;
async function doesParentExist(req, res) {
    try {
        const parent = await (0, get_parents_1.readParent)(req, res);
        if (parent) {
            res.status(200).json(parent);
        }
        else {
            res.status(500).send({ msg: "Parent does not exist" });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "error",
        });
    }
}
exports.doesParentExist = doesParentExist;
function generateAdmissionID() {
    const arr = Array(10)
        .fill(0)
        .map((val) => Math.floor(Math.random() * 10));
    arr[0] = 2;
    const admissionId = Number(arr.join(""));
    return admissionId;
}
//# sourceMappingURL=stud_enrollment.js.map