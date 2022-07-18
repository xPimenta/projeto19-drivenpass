import { Router } from "express";

import authRouter from "./authRouter.js";
import notesRouter from "./notesRouter.js";
import wifiRouter from "./wifiRouter.js";
import cardsRouter from "./cardsRouter.js";
import credentialsRouter from "./credentialsRouter.js";

const router = Router();

router.use(authRouter);
router.use(wifiRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(credentialsRouter);


export default router;
