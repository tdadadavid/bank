"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const core_1 = require("../core");
exports.register = {
    "app:up": () => core_1.logger.info(`Server started at ${core_1.config.app.port} in ${core_1.config.app.environment} environment`),
    "cache:connection:established": () => core_1.logger.info(`Cache connection established`),
    "event:registeration:succesful": () => core_1.logger.info("Events listeners registered"),
};
//# sourceMappingURL=event.listener.register.js.map