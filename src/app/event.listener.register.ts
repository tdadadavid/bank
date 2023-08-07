import { logger, config, NewUserOptions } from "../core";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": () => logger.info(`Server started at ${config.app.port} in ${config.app.environment} environment`),
  "cache:connection:established": () => logger.info(`Cache connection established`),
  "auth:new:user": [
    (options: NewUserOptions) => logger.info("")
  ],
  "event:registeration:succesful": () =>
    logger.info("Events listeners registered"),
};
