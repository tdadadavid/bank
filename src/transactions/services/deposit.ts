import { AccountModel } from "../../accounts";
import { ConflictError, ControllerArgs, HttpStatus, sanitize } from "../../core";
import { dispatch } from "../../app";
import { Transaction } from "../models";
import { randomUUID } from "node:crypto";



export const deposit = async ({ input, user }: ControllerArgs) => {
    const { amount } = input;


    const account = await AccountModel.findOne({ owner: user?.id });
    if (!account) throw new ConflictError("User account not found");

    account.amount = (+account?.amount + amount).toString();
    await account.save();

    const transaction = await Transaction.create({
        transaction_id: randomUUID().toString(),
        amount,
        source_account: account.id,
        type: "deposit",
    });

    //TODO: dispatch deposit mail event.
    // dispatch

    return {
        code: HttpStatus.OK,
        message: "TRrasaction[Deposit] successfully made",
        data: {
            account: sanitize(account),
            transaction: sanitize(transaction),
        }
    }
}