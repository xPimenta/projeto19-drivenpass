import { Router } from "express";

import * as middleware from "../middlewares/validateJWT.js";
import * as controller from "../controllers/wifiController.js";

import { wifiSchema } from './../schemas/wifiSchemas.js';
import { validateSchema } from "../middlewares/validateSchema.js";

const wifiRouter = Router();

wifiRouter.post('/wifi',
  validateSchema(wifiSchema),
  controller.create
);

wifiRouter.get('/wifis/:userId',
  middleware.validateJWT,
  controller.getWifisUser
);

wifiRouter.get('/wifi/:wifiId',
  middleware.validateJWT,
  controller.getWifi
)

wifiRouter.delete('/wifi/:wifiId',
  middleware.validateJWT,
  controller.deleteWifi
);

export default wifiRouter;
