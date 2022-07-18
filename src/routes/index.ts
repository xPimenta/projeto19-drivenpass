import { Router } from "express";

import wifiRouter from "./wifiRouter.js";
import authRouter from "./authRouter.js";
import notesRouter from "./notesRouter.js";
import cardsRouter from "./cardsRouter.js";
import documentsRouter from "./documentsRouter.js";
import credentialsRouter from "./credentialsRouter.js";

const router = Router();

router.use(authRouter);
router.use(wifiRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(documentsRouter);
router.use(credentialsRouter);

export default router;
