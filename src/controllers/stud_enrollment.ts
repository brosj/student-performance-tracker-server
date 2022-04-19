import { Request, Response } from "express";
import Parent_registration from "../models/parent_registation";
import Stud_entrollment from "../models/stud_enrollment";
import UserLogin from "../models/users";
import { getClassFee } from "./get_fees";
import { readParent } from "./get_parents";

const studentEnroller = async (req: Request, res: Response) => {
  try {
    const classFee = await getClassFee(req.body.class);
    // ----------- EDIT SEARCH EMAIL PARAM ------------- //
    // const parent = await readParent(req, res);
    const parent =  await Parent_registration.findOne({parent_email: req.params.parent_email});

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
      await Stud_entrollment.create(student_enrollSchema);
    } else {
      await Stud_entrollment.create(student_enrollSchema);
      await Parent_registration.create(parent_regSchema);
      await UserLogin.create(user1_Schema);
      if (req.body.parent_alt_email) {
        await UserLogin.create(user2_Schema);
      }
    }

    res.status(200).json({
      message: "Registration successful.",
    });
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({
      message: "Error. Registration failed.",
    });
  }
};

async function doesParentExist(req: Request, res: Response) {
  try {
    const parent = await readParent(req, res);
    if (parent) {
      res.status(200).json(parent);
    } else {
      res.status(500).send({ msg: "Parent does not exist" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error",
    });
  }
}

function generateAdmissionID(): number {
  const arr: number[] = Array(10)
    .fill(0)
    .map((val) => Math.floor(Math.random() * 10));
  arr[0] = 2;
  const admissionId = Number(arr.join(""));
  return admissionId;
}

export { doesParentExist, studentEnroller };
