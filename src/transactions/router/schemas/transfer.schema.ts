import * as Joi from "joi";
import { ValidationSchema } from "../../../core";


export const transferSchema: ValidationSchema = {
    inputSchema: Joi.object({
        amount: Joi.number().min(1000).required(),
        destination: Joi.string().required()
    })
}