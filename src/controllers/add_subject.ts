import { Request, Response } from "express";
import Parent_registration from "../models/parent_registation";

export async function addNotification(req: Request, res: Response) {
  const title = req.body.title;
  const description = req.body.description;

  const newNotification = { title, description }

  await Parent_registration.update(
    { },
    { $push: { notification: { $each: [newNotification], $position: 0 } } }
  );

  res.status(200).send({ msg: "Notification added successfully." });
}