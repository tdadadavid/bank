import { UserModel } from "../../users";
import { ControllerArgs, HttpStatus, sanitize } from "../../core";
import { Transaction } from "../models";


export const seeTransactions = async ({ user }: ControllerArgs) => {

    const userInfo = await UserModel.findOne({ id: user?.id });
    const transactions = await Transaction.find({ $or: [
        { source_account: userInfo?.phoneNumber },
        { destination_account: userInfo?.phoneNumber }
    ]});

    return {
        code: HttpStatus.OK,
        message: "All Transactions",
        data: {
            transactions: transactions.map(sanitize),
        }
    }
}   