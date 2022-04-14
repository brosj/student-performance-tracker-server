"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stud_enrollment_1 = require("../controllers/stud_enrollment");
const get_students_1 = require("../controllers/get_students");
const get_parents_1 = require("../controllers/get_parents");
const add_fee_1 = require("../controllers/add_fee");
const add_notification_1 = require("../controllers/add_notification");
const login_1 = require("../controllers/login");
const router = express_1.default.Router();
// Homepage.
router.get('/', function (req, res) {
    res.status(200).json({ 'msg': 'Students Performance Tracker' });
});
// Student Enrollment
router.post("/stud_enrollment", stud_enrollment_1.studentEnroller);
router.get('/parent-check', stud_enrollment_1.doesParentExist);
// Get all students enrolled.
router.get('/students', get_students_1.readAllStudents);
// Get single student enrolled.
router.get('/students/:admissionId', get_students_1.readStudent);
// Get parent's children.
router.get('/children', get_students_1.getMyChildren);
// Get all parents.
router.get('/parents', get_parents_1.readAllParents);
// Get single parent.
router.get('/parents/:email', get_parents_1.readParent);
// Add fee.
router.put('/add-fee', add_fee_1.addFee);
// Add notification.
router.put('/add-notification', add_notification_1.addNotification);
// Login
router.post('/login', login_1.login);
exports.default = router;
//# sourceMappingURL=route.js.map