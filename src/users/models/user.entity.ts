import {  hashData, compareHashedData} from "../../core";

import { model, Schema } from "mongoose";
import { uuid } from "uuidv4";

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    othername: string | null;
    email: string;
    phoneNumber: string;
    password: string
}


const userSchema = new Schema<User>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            default: uuid(),
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        othername: {
            type: String,
            required: false,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const UserModel = model<User>('Users', userSchema);


userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) next();

    this.password = await hashData(this.password);
    
    next();
});


userSchema.methods.passwordEquals = function(plain: string) {
    return compareHashedData(plain, this.password);
}
