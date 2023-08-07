import { logger, config } from "../core";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": () => logger.info(`Server started at ${config.app.port} in ${config.app.environment} environment`),
  "cache:connection:established": () => logger.info(`Cache connection established`),
  "event:registeration:succesful": () =>
    logger.info("Events listeners registered"),
};
