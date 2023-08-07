"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = exports.controllerHandler = void 0;
const controllerHandler_1 = require("./controllerHandler");
const errorhandler_1 = require("./errorhandler");
const notFoundErrorHandler_1 = require("./notFoundErrorHandler");
exports.controllerHandler = new controllerHandler_1.ControllerHandler();
exports.errorHandler = new errorhandler_1.ErrorHandler();
exports.notFoundHandler = new notFoundErrorHandler_1.NotFoundErrorHandler();
//# sourceMappingURL=index.js.map