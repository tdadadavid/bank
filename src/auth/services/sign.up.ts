import { UserModel } from "../../users";
import { dispatch } from "../../app";
import { ConflictError, ControllerArgs, hashData, sanitize } from "../../core";


export const signUp = async ({ input }: ControllerArgs) => {
    const { email, firstname, lastname, othername, password } =  input;

    const userExists = await UserModel.findOne({ email });
    if(userExists) throw new ConflictError("User with email already exists");

    const hashPassword = await hashData(password);

    const newAdmin = await UserModel.create({
        firstname,
        lastname,
        email,
        othername,
        password: hashPassword
    })
    await newAdmin.save();

    const data = sanitize(newAdmin);

    const newUserNotificationOptions = {
        firstname: newAdmin.firstname,
        lastname: newAdmin.lastname,
        email: newAdmin.email,
    }
    dispatch("auth:new:user", newUserNotificationOptions);

    return {
        code: 201,
        message: "User registered successfully",
        data,
    }
}

