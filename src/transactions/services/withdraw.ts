import { AccountModel } from "../../accounts";
import { ConflictError, ControllerArgs, HttpStatus, sanitize } from "../../core";
import { Transaction } from "../models";
import { randomUUID } from "node:crypto";

export const withdraw = async ({ input, user }: ControllerArgs) => {
    const { amount } = input;


    const account = await AccountModel.findOne({ owner: user?.id });
    if (!account) throw new ConflictError("User account not found");

    if(account.amount < amount)
        throw new ConflictError("Insufficient balance");

    account.amount = (+account?.amount - amount).toString();
    await account.save();

    const transaction = await Transaction.create({
        transaction_id: randomUUID().toString(),
        amount,
        source_account: account.id,
        type: "withdraw",
    });

    //TODO: dispatch deposit mail event.
    // dispatch

    return {
        code: HttpStatus.OK,
        message: "Transaction[Withdrawal] successfully made",
        data: {
            account: sanitize(account),
            transaction: sanitize(transaction),
        }
    }
}

