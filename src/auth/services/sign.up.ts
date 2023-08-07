import { ConflictError, ControllerArgs, hashData } from "../../core";


export const signUp = async ({ input }: ControllerArgs) => {
    const { email, firstName, lastName, otherName, password } =  input;

    // const adminExist = await Admin.findOne({ where: { email } });
    // if(adminExist) throw new ConflictError("Admin with email already exists");

    // const hashPassword = await hashData(password);

    // const newAdmin = await Admin.create({
    //     firstName,
    //     lastName,
    //     email,
    //     otherName,
    //     password: hashPassword
    // });

    // const data = newAdmin.toJSON();

    // delete data.password;

    return {
        code: 201,
        message: "Admin registered successfully",
    }
}