import { Schema, model } from "mongoose";
import { uuid } from "uuidv4";

export interface Account {
    account_id: string;
    amount: string;
    currency: string;
    account_number: string;
    owner: string;
}


const accountSchema: Schema = new Schema<Account>(
    {
        account_id: {
            type: String,
            required: true,
            default: uuid(),
        },
        amount: {
            type: String,
            required: true,
            default: "0",
        },
        account_number: {
            type: String,
            required: true,
            unique: true,
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

export const AccountModel = model<Account>("Account", accountSchema);


