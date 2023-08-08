import { AccountModel } from "../../accounts";
import { ConflictError, ControllerArgs, HttpStatus, sanitize } from "../../core";
import { dispatch } from "../../app";
import { Transaction } from "../models";
import { randomUUID } from "node:crypto";
import { UserModel } from "../../users";



export const deposit = async ({ input, user }: ControllerArgs) => {
    const { amount } = input;


    const userInfo = await UserModel.findOne({ id: user?.id })
    const account = await AccountModel.findOne({ owner: user?.id });
    if (!account) throw new ConflictError("User account not found");

    account.amount = (+account?.amount + amount).toString();
    await account.save();

    const transaction = await Transaction.create({
        transaction_id: randomUUID().toString(),
        amount,
        source_account: account.account_number,
        type: "deposit",
    });

    const depositMadeNotificationOptions = {
        email: userInfo!.email,
        account: account.account_number,
    }
    dispatch("deposit:made", depositMadeNotificationOptions);  

    return {
        code: HttpStatus.OK,
        message: "Trasaction[Deposit] successfully made",
        data: {
            account: sanitize(account),
            transaction: sanitize(transaction),
        }
    }
}