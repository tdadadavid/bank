import { UserModel } from "../../users";

import { dispatch } from "../../app";
import { ConflictError, ControllerArgs, hashData } from "../../core";


export const signUp = async ({ input }: ControllerArgs) => {
    const { email, firstName, lastName, otherName, password } =  input;

    const userExists = await UserModel.findOne({ where: { email } });
    if(userExists) throw new ConflictError("Admin with email already exists");

    const hashPassword = await hashData(password);

    const newAdmin = await UserModel.create({
        firstName,
        lastName,
        email,
        otherName,
        password: hashPassword
    })
    await newAdmin.save();

    const data = sanitize(newAdmin);

    const newUserNotificationOptions = {
        firstname: "firstname",
        lastname: "lastname",
        email: "email",
    }
    dispatch("auth:new:user", newUserNotificationOptions);

    return {
        code: 201,
        message: "Admin registered successfully",
        data,
    }
}

const sanitize = (admin: any) => {
    delete admin._id;
    delete admin._v;
}