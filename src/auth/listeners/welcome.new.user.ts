import { NewUserOptions, Notification, mail } from "../../core";
import { join } from "node:path";

class WelcomeNewUserNotification extends Notification {

    async handle(options: NewUserOptions): Promise<void> {
        
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

export const welcomeNewUserNotification = new WelcomeNewUserNotification