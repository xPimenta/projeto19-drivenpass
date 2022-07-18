import { Request, Response } from "express";

import * as userService from "../services/userService.js";

export async function signup(req: Request, res: Response) {
  const { email, password } = req.body;

  await userService.create({ email, password });
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await userService.login({ email, password });
  res.send(user);
}
