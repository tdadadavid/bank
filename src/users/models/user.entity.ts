import { generateRandStr } from "../../core";

import { model, Schema } from "mongoose";
import { compareHashedData, hashData } from "../../core";

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    othername: string | null;
    email: string;
    password: string
}


const userSchema = new Schema<User>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            default: generateRandStr(),
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


userSchema.methods.comparePassword = function(plain: string) {
    return compareHashedData(plain, this.password);
}
