import * as Joi from "joi";

import { ValidationSchema } from "../../../core";

export const signInSchema: ValidationSchema = {
    inputSchema: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(18).required(),
    })
}