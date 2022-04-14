import { Request, Response } from "express";
import Fees_catalogue from "../models/fees";

export async function addFee(req: Request, res: Response) {
  const filter = { class: req.body.class };
  const update = { amount: req.body.amount, dueDate: req.body.dueDate };

  await Fees_catalogue.findOneAndUpdate(filter, update, {
    upsert: true,
    new: true,
  });

  res.status(200).send({ msg: `${req.body.class} fee updated successfully.` });
}
