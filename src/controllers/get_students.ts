import { Request, Response } from "express";
import Stud_enrollment from "../models/stud_enrollment";

// Get all enrolled students
export async function readAllStudents(_req: Request, res: Response) {
  try {
    const students = await Stud_enrollment.find({});
    res.status(200).send(students);
    return students;
  } catch (error) {
    res.status(500).json({ error: "No student available." });
    return false;
  }
}

// Get single enrolled student
export async function readStudent(req: Request, res: Response) {
  try {
    const admissionId = req.params.admissionId;
    const student = await Stud_enrollment.findOne({
      admission_id: admissionId,
    });
    student ? res.status(200).send(student) : res.status(500).json({ error: "No student found matching admission ID." });
    return student;
  } catch (error) {
    res.status(500).json({ error: "No student found matching admission ID." });
    return false;
  }
}

// Return children on Parent Dashboard
export async function getMyChildren(req: Request, res: Response) {
  try {
    const email = req.body.login_email;
    const children = await Stud_enrollment.find({ parent_email: email });
    res.status(200).send(children);
    return children;
  } catch (error) {
    res.status(500).json({ error: "No student enrolled." });
    return false;
  }
}
