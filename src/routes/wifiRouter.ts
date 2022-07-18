import { Router } from "express";

import * as controller from "../controllers/wifiController.js";

import { wifiSchema } from './../schemas/wifiSchemas.js';
import { validateSchema } from "../middlewares/validateSchema.js";

const wifiRouter = Router();

wifiRouter.post('/wifi',
  validateSchema(wifiSchema),
  controller.create
);

wifiRouter.get('/wifi/:userId', controller.getWifisUser);

wifiRouter.delete('/wifi');

export default wifiRouter;
