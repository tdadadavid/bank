import { Account, AccountModel } from "../../accounts";
import { ControllerArgs, HttpStatus, UnAuthorizedError, sanitize } from "../../core";
import { UserModel } from "../models";


export const viewProfile = async ({ user }: ControllerArgs) => {
    
    let profile = await UserModel.findOne({ id: user?.id });
    if(!profile) throw new UnAuthorizedError("User not found");

    let accounts = await AccountModel.find({ owner: user?.id });

    profile = sanitize(profile);
    accounts = accounts.map((account: Account) => {
        return sanitize(account);
    })

    return {
        code: HttpStatus.OK,
        message: "User profile",
        data: {
            user: profile,
            accounts
        }
    }
}