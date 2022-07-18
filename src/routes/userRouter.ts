import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT.js";
import * as controller from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/countAll", validateJWT , controller.countAll);

export default userRouter;
