import { Router } from "express";

import * as middleware from "../middlewares/validateJWT.js";
import * as controller from "../controllers/cardsController.js";

import { cardSchema } from './../schemas/cardsSchemas.js';
import { validateSchema } from "../middlewares/validateSchema.js";

const cardsRouter = Router();

cardsRouter.post("/cards",
  validateSchema(cardSchema),
  controller.create
);

cardsRouter.get(
  "/cards/:id",
  middleware.validateJWT,
  controller.getCardsUser
);

cardsRouter.get("/card/:id",
  middleware.validateJWT,
  controller.getCard
);

cardsRouter.delete(
  "/cards/:id",
  middleware.validateJWT,
  controller.deleteCard
);

export default cardsRouter;
