import { Notification, mail } from "../../core";
import { join } from "node:path";


export interface DepositMadeOptions {
    email: string
    account: string,
}

export class DepositMade extends Notification {
    handle({ email, account }: DepositMadeOptions)  {

        // simulating the process of sending mail
        Promise.resolve(
            mail.send({
                fileName: join(process.cwd(), 'templates/deposit.made.ejs'),
                email,
                data: {
                    account,
                } 
            })
        )
    }
}

export const depositMadeNotification = new DepositMade();