"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const errors_1 = require("../errors");
const logging_1 = require("../logging");
const utils_1 = require("../utils");
class ErrorHandler {
    constructor() {
        this.handle = async (error, _, res, __) => {
            let statusCode = utils_1.HttpStatus.INTERNAL_SERVER_ERROR;
            let message = "internal server error";
            if (error instanceof errors_1.ApiError) {
                logging_1.logger.error("Error in middleware", error);
                statusCode = error.statusCode;
                message = error.message;
            }
            if (statusCode == utils_1.HttpStatus.INTERNAL_SERVER_ERROR)
                logging_1.logger.error(error);
            res.status(statusCode).send({ status: false, error: message });
        };
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=errorhandler.js.map