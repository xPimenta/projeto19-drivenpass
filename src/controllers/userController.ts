import { Request, Response } from "express";

import * as userService from "../services/userService.js";

export async function countAll(_req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  const quantity = await userService.countAll(userId);
  res.send(quantity);
}
