import { Request, Response } from "express";
import Parent_registration from '../models/parent_registation';

// Get all parents
export async function readAllParents(_req: Request, res: Response) {
  try {
    const parents = await Parent_registration.find({});
    res.status(200).send(parents);
  } catch (error) {
    res.status(500).json({ error: "No parent available." });
  }
}

// Get single parent
export async function readParent(req: Request, res: Response) {
  try {
    const email = req.params.email;
    const parent =  await Parent_registration.findOne({ parent_email: email });
    parent ? res.status(200).send(parent) : res.status(500).json({ error: "No parent found matching email." });
  } catch (error) {
    res.status(500).json({ error: "No parent found matching email." });
  }
}