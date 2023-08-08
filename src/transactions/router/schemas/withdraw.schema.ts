import * as Joi from "joi";
import { ValidationSchema } from "../../../core";


export const withdrawSchema: ValidationSchema = {
    inputSchema: Joi.object({
        amount: Joi.number().min(1000).required(),
    })
}