import { UserModel } from "../../users";
import { dispatch } from "../../app";
import { ConflictError, ControllerArgs,NewUserOptions, CreateNewUserAccountOptions, HttpStatus, hashData, sanitize } from "../../core";


export const signUp = async ({ input }: ControllerArgs) => {
    const { email, firstname, lastname, othername, password, phoneNumber } =  input;

    const userExists = await UserModel.findOne({ 
        $or: [
            { email },
            { phoneNumber }
        ]
     });
    if(userExists) throw new ConflictError("User with email/phoneNumber already exists");

    const hashPassword = await hashData(password);

    const user = await UserModel.create({
        firstname,
        lastname,
        email,
        othername,
        phoneNumber,
        password: hashPassword
    })
    
    const data = sanitize(user);

    const newUserNotificationOptions: NewUserOptions = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
    }
    dispatch("auth:new:user", newUserNotificationOptions);


    dispatch("create:new:account", {
        currency: "GBP",
        owner: user.id,
        phoneNumber: user.phoneNumber,
    })

    return {
        code: HttpStatus.CREATED,
        message: "User registered successfully. Check your profile to see your newly created account.",
        data,
    }
}

