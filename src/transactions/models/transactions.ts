import { Schema, model } from "mongoose";
import { randomUUID } from "node:crypto";

export interface Transaction {
    transaction_id: string;
    amount: number;
    destination_account: string | null;
    source_account: string | null;
    type: "withdraw" | "transfer" | "deposit" 
}


const transactionSchema = new Schema<Transaction>(
    {
        transaction_id: {
            type: String,
            required: true,
            unique: true,
            default: randomUUID().toString()
        },
        amount: {
            type: Number,
            required: true,
        },
        destination_account: {
            type: String,
        },
        source_account: {
            type: String,
        },
        type: {
            type: String,
            required: true,
            default: "deposit",
        }
    },
    {
        timestamps: true,
    }
);

export const Transaction = model<Transaction>('Transaction', transactionSchema);