import { ControllerHandler } from "./controllerHandler";
import { ErrorHandler } from "./errorhandler";
import { NotFoundErrorHandler } from "./notFoundErrorHandler";

export const controllerHandler = new ControllerHandler();
export const errorHandler = new ErrorHandler();
export const notFoundHandler = new NotFoundErrorHandler();
