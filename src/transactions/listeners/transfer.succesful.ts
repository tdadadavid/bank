import { Notification, mail } from "../../core";
import { join } from "node:path";


export class TransferSuccesfulNotification extends Notification {
    handle()  {

        // simulating the process of sending mail
        Promise.resolve(
            mail.send({
                fileName: join(process.cwd(), 'templates/transfer.succesful.ejs'),
                email: "dean@gmail.com",
                data: {
                    account: "024506172",
                } 
            })
        )
    }
}

export const transferSuccedNotification = new TransferSuccesfulNotification();