import express, { Request, Response } from 'express';
import { studentEnroller, doesParentExist } from '../controllers/stud_enrollment';
import { readStudent, readAllStudents, getMyChildren } from '../controllers/get_students';
import { readParent, readAllParents } from '../controllers/get_parents';
import { addFee } from '../controllers/add_fee';
import { addNotification } from '../controllers/add_notification';
import { login } from '../controllers/login';

const  router = express.Router();

// Homepage.
router.get('/', function(req: Request, res: Response) {
  res.status(200).json({'msg': 'Students Performance Tracker'});
});

// Student Enrollment
router.post("/stud_enrollment", studentEnroller);

router.get('/parent-check', doesParentExist);

// Get all students enrolled.
router.get('/students', readAllStudents);

// Get single student enrolled.
router.get('/students/:admissionId', readStudent);

// Get parent's children.
router.get('/children', getMyChildren);

// Get all parents.
router.get('/parents', readAllParents);

// Get single parent.
router.get('/parent/:email', readParent);

// Add fee.
router.put('/add-fee', addFee);

// Add notification.
router.put('/add-notification', addNotification);

// Login
router.post('/login', login);


export default router;