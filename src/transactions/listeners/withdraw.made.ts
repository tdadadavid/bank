import { Notification, mail } from "../../core";
import { join } from "node:path";

export class WithdrawalMade extends Notification {
    handle()  {

        // simulating the process of sending mail
        Promise.resolve(
            mail.send({
                fileName: join(process.cwd(), 'templates/withdrawal.made.ejs'),
                email: "dummy@gmail.com",
                data: {
                    account: "0245065172",
                } 
            })
        )
    }
}

export const withdrawalMadeNotification = new WithdrawalMade();