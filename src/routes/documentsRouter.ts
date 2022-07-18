import { Router } from "express";

import * as middleware from "../middlewares/validateJWT.js";
import * as controller from "../controllers/documentsController.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { documentsSchema } from "../schemas/documentsSchemas.js";

const documentsRouter = Router();

documentsRouter.post(
  "/documents",
  validateSchema(documentsSchema),
  middleware.validateJWT,
  controller.create
);

documentsRouter.get(
  "/documents",
  middleware.validateJWT,
  controller.getDocumentUser
);

documentsRouter.get(
  "/documents/:id",
  middleware.validateJWT,
  controller.getDocument
);

documentsRouter.delete(
  "/documents/:id",
  middleware.validateJWT,
  controller.deleteDocument
);

export default documentsRouter;
