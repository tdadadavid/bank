import { welcomeNewUserNotification } from "../auth";
import { logger, config } from "../core";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": () => logger.info(`Server started at port ${config.app.port} in ${config.app.environment} environment`),
  "cache:connection:established": () => logger.info(`Cache connection established`),
  "auth:new:user": welcomeNewUserNotification.handle,
  "event:registeration:succesful": () =>
    logger.info("Events listeners registered"),
};
