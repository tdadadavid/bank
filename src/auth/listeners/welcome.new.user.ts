import { Notification, mail } from "../../core";
import { join } from "node:path";

export class WelcomeNewUserNotification extends Notification {

    async handle(options: {
        firstname: string,
        lastname: string,
        email: string,
    }): Promise<void> {
        
        mail.send({
            fileName: join(process.cwd(), './templates/welcome-new-user.ejs'),
            data: {
                firstname: options.firstname,
                lastname: options.lastname
            },
            email: options.email,
            subject: "Welcome to Nosh Bank"
        })
    }
}