import { ValidationSchema } from "../../../core";

import * as Joi from "joi";

export const signUpSchema: ValidationSchema = {
    inputSchema: Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        othername: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(18).required(),
    })
}