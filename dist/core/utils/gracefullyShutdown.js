"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gracefullyShutdown = void 0;
const logging_1 = require("../logging");
const gracefullyShutdown = async (error) => {
    logging_1.logger.error("UNEXPECTED_APP_ERROR", error);
    process.exit(1);
};
exports.gracefullyShutdown = gracefullyShutdown;
//# sourceMappingURL=gracefullyShutdown.js.map