import { ValidationSchema } from "../../../core";

import * as Joi from "joi";

export const refreshTokenSchema: ValidationSchema = {
    querySchema: Joi.object({
        token: Joi.string().required()
    })
}