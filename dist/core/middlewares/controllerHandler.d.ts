import { AnyFunction, ExpressCallbackFunction, ValidationSchema } from "../types";
export declare class ControllerHandler {
    handle: (controllerFn: AnyFunction, schema?: ValidationSchema | undefined) => ExpressCallbackFunction;
}
