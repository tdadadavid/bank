import { Schema, model } from "mongoose";

export interface Currency {
    currency: string;
    id: string;
    code: string;
}


const currencySchema = new Schema<Currency>({
    id: {
        type: String,
        unique: true,
    },
    currency: {
        type: String,
        unique: true,
        required: true,
    },
    code: {
        type: String,
        unique: true,
        required: true,
    }
});


export const Currency = model('Currency', currencySchema);