import { Request, Response } from "express";
import UserLogin from '../models/users';

export function login(req: Request, res: Response) {
  UserLogin.findOne({ email: req.body.email })
  .then((user) => {
    if (!user) {
      res.json({ error: 'User does not exist.' });
    } else {
      if ( req.body.password !== user.password ) {
        res.json({ error: 'Wrong password.' });
      } else {
        res.json({ msg: 'Login successful.' });
      }
    }
  })
  .catch((err) => {
    res.json({ error: err });
  });
}