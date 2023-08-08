import { createNewUserAccount } from "../users";
import { welcomeNewUserNotification } from "../auth";
import { logger, config } from "../core";
import { registerCurrencies } from "../accounts";
import { depositMadeNotification, transferFailedNotification, transferSuccedNotification, withdrawalMadeNotification } from "../transactions";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": [
    registerCurrencies.handle,
    () => logger.info(`Server started at port ${config.app.port} in ${config.app.environment} environment`)
  ],
  "cache:connection:established": () => logger.info(`Cache connection established`),
  "auth:new:user": welcomeNewUserNotification.handle,
  "create:new:account": createNewUserAccount.handle,
  "transfer:failed": transferFailedNotification.handle,
  "transfer:success": transferSuccedNotification.handle,
  "transfer:reciever": () => logger.info(""),
  "transfer:sender": () => logger.info(""),
  "deposit:made": depositMadeNotification.handle,
  "withdraw:made": withdrawalMadeNotification.handle,
  "event:registeration:succesful": () =>
    logger.info("Events listeners registered"),
};
