import Joi from "joi";

import { userData } from "../services/userService";

export const authSchema = Joi.object<userData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});
