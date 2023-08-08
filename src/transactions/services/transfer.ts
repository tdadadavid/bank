import { AccountModel } from "../../accounts";
import { ConflictError, ControllerArgs, HttpStatus, logger, sanitize } from "../../core";
import { Transaction } from "../models";
import { mongoose } from "../../core";
import { randomUUID } from "node:crypto";
import { dispatch } from "../../app";


export const transfer = async ({ input, user }: ControllerArgs) => {
    const { amount, destination } = input;

    const transactionSession = await mongoose.startSession();
    let transaction;
    let sourceAccount;

    try {

        await transactionSession.startTransaction();

        const destinationAccount = await AccountModel.findOne({ account_number: destination });
        if(!destinationAccount)
            throw new ConflictError("Destination account not found");

        //TODO: work on exchange rates for different currencies 
            
        sourceAccount = await AccountModel.findOne({ owner: user?.id }).populate('currency').exec();

        if(sourceAccount!.amount < amount)
            throw new ConflictError("Insufficient balance");

        sourceAccount!.amount = (+sourceAccount!.amount - parseFloat(amount)).toString();
        await sourceAccount?.save();

        destinationAccount.amount = (destination.amount + parseFloat(amount)).toString();
        await destinationAccount.save();

        transaction = await Transaction.create({
            transaction_id: randomUUID().toString(),
            amount: +amount,
            type: "transfer",
            source_account: sourceAccount!.account_number,
            destination_account: destinationAccount.account_number,
        })

        await transactionSession.commitTransaction();


        //TODO: dispatch transfer event to sender
        dispatch("transfer:reciever") // send to the recipient email address

        //TODO: dispatch transfer event to receiver
        dispatch("transfer:sender"); // send to the sender email address

        const transferSuccededNotificationOptions = {
            
        }
        dispatch("transfer:success")

    }catch(err: unknown){   
        logger.error(err);
        dispatch("transfer:failed",)
        await transactionSession.abortTransaction();
        throw err;
    }

    transactionSession.endSession();


    return {
        code: HttpStatus.OK,
        message: "Transaction[transfer] successfully",
        data: {
            account: sanitize(sourceAccount),
            transaction: sanitize(transaction)
        }
    }
}