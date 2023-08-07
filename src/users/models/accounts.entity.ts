import { generateRandStr } from "../../core";

import { Schema, model } from "mongoose";

export interface Account {
    account_id: string;
    amount: string;
    currency: string;
    owner: string;
}


const accountSchema: Schema = new Schema<Account>(
    {
        account_id: {
            type: String,
            required: true,
            default: generateRandStr()
        },
        amount: {
            type: String,
            required: true,
            default: "0",
        },
        currency: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            ref: 'Users',
        }
    }, 
    {

        timestamps: true
        
    }
);

export const AccountModel = model<string>("Account", accountSchema);


