import { ValidationSchema } from "../../../core";

import * as Joi from "joi";

export const signInSchema: ValidationSchema = {
    inputSchema: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(12).required(),
    })
}