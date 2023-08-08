"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const users_1 = require("../users");
const auth_1 = require("../auth");
const core_1 = require("../core");
const accounts_1 = require("../accounts");
const transactions_1 = require("../transactions");
exports.register = {
    "app:up": [
        accounts_1.registerCurrencies.handle,
        () => core_1.logger.info(`Server started at port ${core_1.config.app.port} in ${core_1.config.app.environment} environment`)
    ],
    "cache:connection:established": () => core_1.logger.info(`Cache connection established`),
    "auth:new:user": auth_1.welcomeNewUserNotification.handle,
    "create:new:account": users_1.createNewUserAccount.handle,
    "transfer:failed": transactions_1.transferFailedNotification.handle,
    "transfer:success": transactions_1.transferSuccedNotification.handle,
    "transfer:reciever": () => core_1.logger.info(""),
    "transfer:sender": () => core_1.logger.info(""),
    "deposit:made": transactions_1.depositMadeNotification.handle,
    "withdraw:made": transactions_1.withdrawalMadeNotification.handle,
    "event:registeration:succesful": () => core_1.logger.info("Events listeners registered"),
};
//# sourceMappingURL=event.listener.register.js.map