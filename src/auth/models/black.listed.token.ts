import { Schema, model } from "mongoose";


export interface BlacklistToken {
    id: string;
    token: string;
    expiry: Date;
}

const blacklistToken = new Schema<BlacklistToken>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true,
        unique: true,
    },
    expiry: {   
        type: Date,
        required: true
    },
});

export const BlacklistToken = model<BlacklistToken>('blacklistoken', blacklistToken);
